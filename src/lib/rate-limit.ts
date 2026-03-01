type RateLimitRecord = {
    count: number;
    resetTime: number;
};

// NOTE: In-memory store works for single-instance deployments (e.g. Vercel serverless).
// For multi-instance production setups, replace with Redis/Vercel KV.
const store = new Map<string, RateLimitRecord>();
const MAX_ENTRIES = 1000;
let lastCleanup = Date.now();
const CLEANUP_INTERVAL = 60_000; // 1 minute

function cleanup(now: number) {
    if (now - lastCleanup < CLEANUP_INTERVAL) return;
    lastCleanup = now;
    for (const [key, value] of store.entries()) {
        if (now > value.resetTime) {
            store.delete(key);
        }
    }
    // Hard cap to prevent unbounded growth
    if (store.size > MAX_ENTRIES) {
        const excess = store.size - MAX_ENTRIES;
        const keys = store.keys();
        for (let i = 0; i < excess; i++) {
            const { value } = keys.next();
            if (value) store.delete(value);
        }
    }
}

export function checkRateLimit(ip: string, limit: number = 3, windowMs: number = 60000): { success: boolean } {
    const now = Date.now();
    cleanup(now);

    const record = store.get(ip);

    if (!record || now > record.resetTime) {
        store.set(ip, { count: 1, resetTime: now + windowMs });
        return { success: true };
    }

    if (record.count >= limit) {
        return { success: false };
    }

    record.count += 1;
    return { success: true };
}
