type RateLimitRecord = {
    count: number;
    resetTime: number;
};

const store = new Map<string, RateLimitRecord>();

export function checkRateLimit(ip: string, limit: number = 3, windowMs: number = 60000): { success: boolean } {
    const now = Date.now();
    const record = store.get(ip);

    // Clean up occasionally to prevent memory leaks in the Map
    if (Math.random() < 0.1) {
        for (const [key, value] of store.entries()) {
            if (now > value.resetTime) {
                store.delete(key);
            }
        }
    }

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
