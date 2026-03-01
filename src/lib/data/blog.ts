export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    publishedAt: string;
    readingTime: string;
    tags: string[];
    content: string;
}

export const blogPosts: BlogPost[] = [
    {
        slug: "lessons-from-publishing-3-apps",
        title: "What I Learned Publishing 3 Apps on the Play Store in 6 Months",
        description:
            "The real challenges of going from zero to three published Android apps — from policy rejections to FFmpeg crashes, and everything in between.",
        publishedAt: "2025-02-20",
        readingTime: "6 min read",
        tags: ["Android", "Play Store", "Kotlin", "Lessons Learned"],
        content: `Starting six months ago, I had zero programming experience. Today I have three apps on the Google Play Store. Here's what I actually learned — not the polished version, but the real stuff.

## 1. The Play Store Will Reject You (Multiple Times)

My first submission of Smart Calculator was rejected for a metadata policy violation. Turns out you can't use words like "best" or "free" in your app title — Google considers it promotional. My Samsung TV Remote got flagged for using "Samsung" in the title (trademark concerns). I had to rephrase everything carefully.

**Lesson:** Read the Play Store policies before you write a single line of code. Know what you can and can't say, what permissions you need to justify, and what data safety declarations you'll need.

## 2. FFmpeg Will Crash and Give You Nothing

When I integrated FFmpeg into Vixit, I spent two full days debugging a crash that only happened on Samsung devices running Android 12. The error? A single line in the logcat: "Fatal signal 11 (SIGSEGV)". No stack trace, no helpful message — just a native crash.

The fix turned out to be a memory alignment issue with how FFmpegKit allocated buffers on certain ARM architectures. I only found it by reading GitHub issues from 2019.

**Lesson:** When working with native libraries, your debugging skills need to go beyond Android Studio. Learn to read native crash logs, understand signal types, and search GitHub issues relentlessly.

## 3. Users Will Do Things You Never Expected

Within a week of publishing Smart Calculator, someone reported that typing "0÷0" crashed the app. My math parser handled division by zero... but not zero divided by zero (which is mathematically undefined, not infinity). Another user found that entering "))))" caused an infinite loop in my parenthesis matching logic.

**Lesson:** Never trust user input. Build a comprehensive test suite for edge cases, and use Firebase Crashlytics from day one — it'll show you crashes you'd never reproduce yourself.

## 4. Jetpack Compose Changed Everything

I started with XML layouts for my first app. After two screens, I switched to Jetpack Compose and never looked back. The difference in productivity is staggering — what took 200 lines of XML + Kotlin takes 50 lines of Compose. State management with remember and StateFlow is intuitive once it clicks.

**Lesson:** If you're starting Android development in 2025, skip XML entirely. Go straight to Jetpack Compose. The ecosystem has matured enough that you won't hit walls.

## 5. Architecture Matters from Day One

My first version of Smart Calculator had everything in the Activity — UI logic, business logic, data access. It worked for two screens. By the time I had ten calculator tools, the code was unmaintainable. I spent a full weekend refactoring to MVVM with clean architecture.

**Lesson:** Even for "simple" apps, separate your concerns from the start. MVVM + Repository pattern takes 30 minutes to set up but saves you days of refactoring later.

## 6. The IR Blaster Rabbit Hole

Building the Samsung TV Remote taught me that hardware APIs are a completely different world. Android's ConsumerIrManager documentation is minimal. There's no official database of Samsung IR codes. I ended up learning about NEC protocol timing patterns, carrier frequencies, and mark/space encoding just to make a power button work.

**Lesson:** Sometimes the hardest part of a project isn't the code — it's understanding the domain. IR protocols, video codecs, camera pipelines — each requires learning a whole new field.

## What's Next

I'm expanding into web development (this site is built with Next.js), and I have a fourth app — Paperly, a PDF scanner — in development. The goal is to become a full-stack engineer who can build anything from a mobile app to a complete web platform.

If you're thinking about publishing your first app: just do it. The Play Store will humble you, users will surprise you, and you'll learn more in one published app than in a hundred tutorials.`,
    },
];
