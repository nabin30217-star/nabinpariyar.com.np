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
    {
        slug: "building-a-math-parser-from-scratch-in-kotlin",
        title: "Building a Math Parser from Scratch in Kotlin",
        description:
            "How I built a recursive descent parser for Smart Calculator that handles nested expressions, operator precedence, and edge cases — without any external libraries.",
        publishedAt: "2025-04-12",
        readingTime: "7 min read",
        tags: ["Kotlin", "Algorithms", "Android", "Smart Calculator"],
        content: `When I started building Smart Calculator, I needed a way to evaluate math expressions like \`3 + 5 * (2 - 1)\`. My first instinct was to grab a library. Then I looked at the options — most were Java-based, bloated, and added 2-3 MB to the APK. For a calculator app targeting under 5 MB total, that wasn't going to work.

So I built my own. Here's how.

## Why Not Just Use a Library?

The popular options for math evaluation on Android are \`exp4j\`, \`mXparser\`, and \`Javaluator\`. They work, but they come with baggage. \`mXparser\` alone adds over 1.5 MB to your APK. They also support hundreds of functions I'd never need — hyperbolic trig, combinatorics, custom operators. My calculator needed basic arithmetic, percentages, square roots, and trigonometry. Nothing more.

Building a custom parser meant I could keep the APK under 5 MB and have complete control over error messages when users type something invalid.

## Step 1: Tokenization

Before you can evaluate \`3 + 5 * 2\`, you need to break it into tokens: \`3\`, \`+\`, \`5\`, \`*\`, \`2\`. This sounds simple until you hit edge cases. What about \`-5\`? Is that a negative number or a subtraction from nothing? What about \`.5\` without a leading zero? What about \`3(5)\` where the multiplication is implied?

My tokenizer scans the input string character by character. It groups digits and decimal points into number tokens. It recognizes operators, parentheses, and function names like \`sin\`, \`cos\`, \`sqrt\`. The key insight was handling implicit multiplication — when a number is directly followed by an opening parenthesis, I insert a multiplication token automatically.

The tokenizer produces an array of typed tokens: \`NumberToken\`, \`OperatorToken\`, \`FunctionToken\`, \`ParenToken\`. Each carries its value and position in the original string (useful for error highlighting later).

## Step 2: Recursive Descent Parsing

A recursive descent parser mirrors the grammar of mathematical expressions directly in code. The grammar has natural precedence: addition and subtraction bind loosely, multiplication and division bind tighter, and exponentiation binds tightest. Parentheses override everything.

The parser has three levels. The \`parseExpression\` function handles addition and subtraction. It calls \`parseTerm\`, which handles multiplication and division. \`parseTerm\` calls \`parseFactor\`, which handles numbers, parenthesized sub-expressions, unary negation, and function calls.

Each function consumes tokens from left to right, building a result as it goes. When \`parseTerm\` encounters a \`*\`, it evaluates the right side by calling \`parseFactor\` and multiplies. This naturally enforces operator precedence without any special logic — the structure of the recursion handles it.

## Step 3: The Edge Cases That Broke Everything

The basic parser worked in a day. The edge cases took a week.

**Division by zero** was the obvious one. I returned \`Infinity\` for \`n / 0\` and \`NaN\` for \`0 / 0\`. But I also had to handle displaying these results — showing "Undefined" instead of "NaN" and the infinity symbol instead of "Infinity".

**Nested parentheses** like \`((((5))))\` should work fine, but unbalanced ones like \`((5)\` needed clear error messages. I added a parenthesis depth counter during tokenization that rejects expressions before parsing even starts.

**Implicit multiplication** had subtle bugs. The expression \`2(3)(4)\` should produce 24, but my first implementation treated \`(3)(4)\` as a function call instead of two separate multiplications. The fix was checking the token before an opening parenthesis — if it's a number or a closing paren, insert a multiplication.

**Percentage** was the sneakiest. Users expect \`100 + 10%\` to equal 110 (not 100.1). This means percentage isn't a simple division by 100 — it's relative to the preceding value. I had to add special handling where \`%\` modifies the previous operand based on context.

## Step 4: Performance

A math parser for a calculator doesn't need to be fast — nobody types expressions with thousands of operations. But I still ran into a performance issue: my first version created a new \`String\` object for every character during tokenization. On older devices, evaluating a 50-character expression allocated over 200 objects and triggered garbage collection mid-calculation.

The fix was switching to \`CharArray\` operations and pre-allocating the token list based on input length. Evaluation went from 12ms to under 1ms. Overkill? Probably. But it felt good.

## What I'd Do Differently

If I built this again, I'd generate an Abstract Syntax Tree (AST) instead of evaluating directly during parsing. An AST lets you do things like simplify expressions, show step-by-step solutions, and cache sub-expressions. My direct-evaluation approach works perfectly for a calculator, but it's a dead end if you want to build anything more complex on top of it.

I'd also write more tests upfront. I ended up with over 80 test cases, but most were written after users found bugs. Test-driven development would have caught the percentage issue and the implicit multiplication bug before they ever shipped.

**The takeaway:** Don't reach for a library by default. Sometimes the problem is small enough that rolling your own gives you better performance, smaller binaries, and deeper understanding. Just budget extra time for edge cases — they'll take longer than the core implementation.`,
    },
    {
        slug: "integrating-ffmpeg-in-android",
        title: "Integrating FFmpeg in Android Without Losing Your Mind",
        description:
            "A practical guide to using FFmpeg on Android — from choosing the right library to surviving native crashes, background processing, and real-time progress tracking.",
        publishedAt: "2025-06-08",
        readingTime: "8 min read",
        tags: ["Android", "FFmpeg", "Vixit", "Native Libraries"],
        content: `FFmpeg is the Swiss Army knife of video processing. It can compress, convert, trim, merge, extract audio, and do about a thousand other things. When I built Vixit, my video compressor app, I needed all of that on Android. What I didn't expect was how painful the integration would be.

This is what I wish someone had told me before I started.

## Choosing the Right FFmpeg Library

There are several ways to use FFmpeg on Android. You can compile it yourself from source using the NDK (don't — unless you enjoy suffering). You can use \`mobile-ffmpeg\` (deprecated). Or you can use \`FFmpegKit\`, which is the maintained successor and what I'd recommend.

FFmpegKit provides pre-built binaries for multiple architectures (arm64-v8a, armeabi-v7a, x86, x86_64). You pick a package based on what codecs you need. The \`full\` package supports everything but adds about 30 MB to your APK. The \`min\` package covers H.264, AAC, and the basics at around 8 MB. For Vixit, I went with \`min-gpl\` which includes x264 encoding — the sweet spot of size versus capability.

Adding it to your project is one Gradle dependency. Getting it to actually work reliably is another story.

## The Native Crash Nightmare

My first week with FFmpegKit was smooth. Compression worked, conversion worked, everything looked great. Then I pushed a beta to a group of testers and within 24 hours, I had three crash reports that looked like this:

\`Fatal signal 11 (SIGSEGV), code 1 (SEGV_MAPERR)\`

That's it. No Kotlin stack trace. No helpful exception message. Just a native segfault deep inside the FFmpeg binary. Firebase Crashlytics captured the crash but the stack trace was just memory addresses inside \`libavcodec.so\`.

The crash only happened on Samsung devices running Android 12. I spent two days trying to reproduce it on my emulator (which doesn't use the same ARM architecture). The fix turned out to be a known memory alignment issue where FFmpegKit's buffer allocation didn't match Samsung's custom memory management layer. I found the solution buried in a GitHub issue from 2019 with three upvotes.

**What I learned:** When working with native libraries, your standard Android debugging tools are almost useless. You need to learn how to read \`tombstone\` files, understand \`addr2line\` to convert memory addresses to function names, and get very comfortable searching GitHub issues with exact error signatures.

## Background Processing with WorkManager

Video compression is slow. A 2-minute 1080p video takes 30-90 seconds to compress depending on the device. You absolutely cannot run this on the main thread, and you can't use a simple coroutine either — if the user leaves the app, the process gets killed.

I used WorkManager with a \`ForegroundWorker\` that shows a persistent notification with progress. The setup looks straightforward in the docs, but there are gotchas. WorkManager requires the work to be serializable — you pass input as \`Data\` objects, which only support primitives and strings. That means you can't pass complex FFmpeg command objects; you serialize the command as a string array and reconstruct it inside the worker.

The other issue is cancellation. When a user taps "Cancel" on the notification, you need to send a cancel signal to the running FFmpeg session. FFmpegKit supports \`cancel()\`, but there's a race condition — if you cancel while FFmpeg is writing to a file, you get a corrupted output. I added a cleanup step that deletes partial output files after any cancellation or error.

## Real-Time Progress Tracking

FFmpeg doesn't have a built-in progress API. Instead, it outputs statistics to \`stderr\` as it runs — frame count, bitrate, speed, and timestamp. FFmpegKit provides a \`StatisticsCallback\` that fires every time FFmpeg outputs a stats line.

The trick is converting FFmpeg's progress into a percentage. You need to know the total duration of the input video first (which you get by running \`FFprobeKit.getMediaInformation()\`), then compare the current timestamp from the statistics callback against that total. I wrapped this in a \`Flow<Float>\` that emits values from 0.0 to 1.0, which feeds directly into a Compose progress indicator.

One thing that tripped me up: the statistics callback fires on a background thread, but you can't update the WorkManager notification from just any thread. I had to collect the flow on the main dispatcher and batch updates to avoid flooding the notification system — updating at most once per second.

## Handling Different Devices

Android fragmentation is real, and it hits hardest with video processing. Some devices report video dimensions incorrectly (rotated by 90 degrees in metadata but not in pixels). Some devices have hardware encoders that produce slightly different output than software encoding. Some cheap devices have so little RAM that FFmpeg gets OOM-killed during compression of 4K video.

I built a device capability check that runs before starting any operation. It reads the available memory, checks for hardware codec support, and adjusts the FFmpeg command accordingly. On low-memory devices, I force a resolution downscale to 720p before compression. On devices without hardware encoding, I reduce the encoding preset from \`medium\` to \`ultrafast\` (worse compression ratio, but it actually finishes).

## The Command Builder Pattern

FFmpeg commands are just strings, which makes them incredibly error-prone. A single wrong flag can produce silent corruption — the video looks fine until you seek to a specific timestamp and get artifacts.

I built a Kotlin DSL for constructing FFmpeg commands. Instead of writing raw strings like \`-i input.mp4 -vcodec libx264 -crf 28 -preset medium output.mp4\`, I have typed builders: \`VideoCommand.compress { input(uri); quality(Quality.MEDIUM); output(outputPath) }\`. The builder validates parameters before generating the command string — it catches things like missing input files, invalid CRF ranges, and incompatible codec combinations at compile time.

## What I'd Do Differently

I'd start with a smaller scope. Vixit launched with compression, conversion, trimming, merging, and audio extraction. Each feature multiplied the testing matrix — five operations across four architectures across three Android versions. The initial release should have been compression only, with other features added after the core was stable.

I'd also invest in automated testing earlier. Video processing is hard to unit test (you need actual video files and they're slow), but I could have built a suite of integration tests that run on CI with known input/output pairs. Instead, I tested manually for the first three months, which meant bugs slipped through.

**The bottom line:** FFmpeg on Android is powerful but hostile. Budget twice as much time as you think for native crashes, device fragmentation, and background processing edge cases. When it works, it's magical. Getting it to work reliably is the hard part.`,
    },
    {
        slug: "from-xml-to-jetpack-compose",
        title: "From XML Layouts to Jetpack Compose — A Practical Migration Guide",
        description:
            "What actually changes when you switch from XML to Compose, the gotchas nobody warns you about, and why I'd never go back.",
        publishedAt: "2025-08-15",
        readingTime: "6 min read",
        tags: ["Android", "Jetpack Compose", "Kotlin", "UI"],
        content: `I built my first Android screen in XML. Two screens later, I switched to Jetpack Compose. Three apps later, I've never touched XML again. But the switch wasn't instant — there was a solid two-week period where Compose felt harder, not easier. Here's what the transition actually looks like.

## The XML Comfort Zone

XML layouts are familiar if you've ever written HTML. You define views declaratively, set attributes, nest them in layout containers. Android Studio's Layout Editor gives you a visual preview. Data binding or view binding connects your XML to Kotlin code. It works.

The problems show up when things get dynamic. Updating a \`TextView\` based on state requires finding the view by ID, setting the text, maybe updating visibility, and handling nullability. A moderately complex screen with a list, header, loading state, and error state ends up with 200+ lines of XML and another 200 lines of Kotlin just to wire everything together. State management becomes a mess of \`LiveData\` observers, \`ViewBinding\` references, and manual view updates.

## The First Week of Compose (It Gets Worse Before It Gets Better)

My first Compose screen took longer than it would have in XML. I was fighting the framework instead of working with it. I kept trying to "find" views and "set" values — the imperative mindset doesn't translate.

The conceptual shift is this: in XML, you create views once and mutate them. In Compose, you describe what the UI should look like for a given state, and the framework handles the rest. You don't update a text field — you declare that a text field shows \`state.username\`, and when \`state\` changes, the framework re-renders the text field automatically.

Once this clicked, everything accelerated. Screen development went from hours to minutes. A full settings screen with toggles, dropdowns, and navigation — maybe 40 minutes in Compose. The same screen in XML with proper data binding? Half a day.

## State Management: The Core Difference

In XML Android, state is scattered. Some lives in the ViewModel as \`LiveData\`. Some lives in the Fragment as local variables. Some is implicit in the view hierarchy (is this checkbox checked? Go ask the view). Synchronizing all of this is where most bugs come from.

In Compose, state flows in one direction. The ViewModel holds the source of truth as a \`StateFlow\`. The composable function reads that state and renders accordingly. User actions trigger callbacks that update the ViewModel, which emits new state, which triggers recomposition. The cycle is predictable, testable, and hard to break.

I use a pattern where each screen has a single \`UiState\` data class:

The ViewModel exposes a \`StateFlow<CalculatorUiState>\`, and the composable observes it with \`collectAsStateWithLifecycle()\`. Every user action goes through the ViewModel. The UI never mutates state directly. This pattern scales beautifully — Smart Calculator has 15 different tools, each with its own state, and the code stays manageable because every screen follows the same flow.

## Recomposition: The Gotcha Nobody Warns You About

Compose re-executes your composable functions whenever state changes. This is called recomposition, and it's both the magic and the trap. If you put a \`Log.d()\` inside a composable, you'll see it fires far more often than you expect.

The problem comes when you do expensive work inside a composable — allocating objects, computing lists, formatting strings. If a parent composable recomposes, all its children recompose too (unless they can be skipped). I had a screen in Smart Calculator where typing a single character triggered recomposition of the entire calculator grid because I was creating new lambda instances on every render.

The fix is \`remember\` and \`derivedStateOf\`. Use \`remember\` to cache values across recompositions. Use \`derivedStateOf\` for computed values that only change when their inputs change. Use \`key()\` to help Compose identify items in lists. And keep your composables small — a composable that renders a single card is easier for the framework to skip than one that renders an entire screen.

## Material Design 3 Integration

Compose and Material 3 are built for each other. The theming system uses \`MaterialTheme\` with a \`ColorScheme\`, \`Typography\`, and \`Shapes\` — all Kotlin objects, no XML themes or styles.

Dynamic color (extracting colors from the user's wallpaper) is a single line: \`dynamicDarkColorScheme(context)\`. Dark mode support is trivial — provide two color schemes and switch between them. Custom theming is just creating your own \`ColorScheme\`.

The component library covers everything: \`TopAppBar\`, \`NavigationBar\`, \`Card\`, \`TextField\`, \`Switch\`, \`FloatingActionButton\`. They all follow Material 3 specs out of the box, including motion, elevation, and color mapping. I rarely build custom components from scratch — the provided ones handle 90% of use cases.

## Performance: Compose vs XML

There's a myth that Compose is slower than XML. In practice, the difference is negligible for most apps. Compose's initial load might be 10-20ms slower than inflating a simple XML layout, but recomposition is faster than manually rebinding views.

Where Compose genuinely wins is in lists. \`LazyColumn\` with proper \`key\` parameters is as fast as \`RecyclerView\` with \`DiffUtil\`, but with a fraction of the boilerplate. No adapter, no view holder, no layout manager setup. Just \`LazyColumn { items(list, key = { it.id }) { item -> ItemCard(item) } }\`.

The one place I've seen Compose struggle is deeply nested layouts with many animations running simultaneously. Vixit's timeline view with 50+ video thumbnails animating during scroll caused frame drops. The fix was extracting the thumbnail rendering into a separate composable with \`remember\` for the bitmap loading and using \`Modifier.drawWithCache\` instead of \`Image\` composables for better GPU batching.

## The Parts I Don't Miss

**\`findViewById\`** — gone. No more null pointer exceptions from finding a view that doesn't exist in the current layout variant.

**Fragment lifecycle** — Compose navigation replaces fragments entirely. No more \`onCreateView\`, \`onViewCreated\`, \`onDestroyView\` lifecycle confusion.

**RecyclerView adapters** — writing an adapter with a ViewHolder and DiffUtil callback for every list was tedious. LazyColumn eliminates all of it.

**XML layout variants** — portrait, landscape, tablet, phone — Compose handles this with simple \`if\` statements and \`BoxWithConstraints\`. No more maintaining four versions of the same layout.

## Should You Migrate?

If you're starting a new project: absolutely use Compose. There's no reason to learn XML in 2025.

If you have an existing XML project: migrate screen by screen. Compose and XML coexist perfectly — you can embed Compose in XML with \`ComposeView\` and XML in Compose with \`AndroidView\`. I migrated Smart Calculator over two weeks, one screen at a time, and the app never broke.

**The honest truth:** The first week will feel slower. The second week, you'll be as fast as XML. By the third week, you'll wonder how you ever tolerated the old way.`,
    },
    {
        slug: "reverse-engineering-samsung-tv-protocols",
        title: "Reverse-Engineering Samsung TV Protocols for a Remote Control App",
        description:
            "How I built a dual-mode TV remote that works over both IR blaster and Wi-Fi — by decoding NEC protocols, discovering UPnP devices, and speaking WebSocket to Samsung TVs.",
        publishedAt: "2025-10-22",
        readingTime: "7 min read",
        tags: ["Android", "IR Blaster", "Networking", "Samsung TV Remote"],
        content: `My most technically challenging project wasn't a video processor or a math engine — it was a TV remote. Building Samsung TV Remote taught me about infrared protocols, network discovery, WebSocket communication, and the absolute chaos of consumer electronics standards.

Here's what it took to make a phone control a TV.

## Two Ways to Control a TV

Samsung TVs can be controlled in two ways. Old-school: blast infrared signals from a phone's IR blaster (some Android phones have one built in). New-school: connect over Wi-Fi and send commands through Samsung's Smart TV API.

I wanted to support both, which meant building two completely different communication systems that share one UI. The user taps "Volume Up" and the app decides whether to fire an IR signal or send a network packet based on how the TV was connected. Simple in theory, complex in practice.

## The IR Blaster: NEC Protocol Deep Dive

Android provides \`ConsumerIrManager\` for IR blasting. The API is deceptively simple — you call \`transmit(frequency, pattern)\` where \`frequency\` is the carrier frequency in Hertz and \`pattern\` is an array of integers representing alternating on/off durations in microseconds.

The hard part is knowing what pattern to send. Samsung TVs use the NEC infrared protocol. In NEC, a signal starts with a 9000-microsecond burst followed by a 4500-microsecond space (the "leader"). Then comes the data: 8 bits of address, 8 bits of inverted address, 8 bits of command, and 8 bits of inverted command. A logical "1" is a 562-microsecond burst followed by a 1687-microsecond space. A logical "0" is 562 microseconds on, 562 microseconds off.

There's no official database of Samsung IR codes. I found partial lists on hobbyist forums, LIRC remote databases, and by recording signals from a physical Samsung remote using an IR receiver and an Arduino. The Samsung TV address byte is \`0x07\` and the device code is \`0x07\`. Power is command \`0x02\`, volume up is \`0x07\`, channel up is \`0x12\`, and so on.

I built an encoder that takes a command byte, constructs the full NEC frame with address and inverted check bytes, converts it into the microsecond timing pattern Android expects, and transmits it at 38 kHz. Encoding a single button press generates an array of about 67 integers.

## The Wi-Fi Path: UPnP Discovery

For Wi-Fi control, the first challenge is finding the TV on the network. Samsung Smart TVs advertise themselves using UPnP (Universal Plug and Play), specifically the SSDP (Simple Service Discovery Protocol) layer.

SSDP works over UDP multicast. You send an \`M-SEARCH\` request to \`239.255.255.250:1900\` with a specific search target, and any matching device responds with its location URL and service information. Samsung TVs respond with a device description XML that includes the model name, unique device name, and the URL for the control endpoint.

The implementation uses a \`DatagramSocket\` with a 3-second timeout. I send the discovery packet, then listen for responses on a background coroutine. Each response is parsed to extract the TV's IP address, friendly name, and model identifier. The discovery runs automatically when the app opens and can be triggered manually if the TV wasn't found.

One gotcha: some routers block UDP multicast between devices. In those cases, SSDP doesn't work and the user has to enter the TV's IP address manually. I added a fallback that tries a direct HTTP connection to common Samsung TV ports (8001, 8002) on every IP in the local subnet. It's slow (takes about 10 seconds to scan a /24 network) but it works when multicast fails.

## WebSocket Communication

Once you find the TV, you connect over WebSocket. Samsung Smart TVs from 2016 onward expose a WebSocket server on port 8001 (HTTP) or 8002 (HTTPS). The connection URL includes your app's name (base64 encoded), which the TV displays in a pairing prompt the first time.

After the initial pairing, the TV remembers your app and connects without prompting. The WebSocket communication is JSON-based. To send a key press, you emit a message like:

\`{"method":"ms.remote.control","params":{"Cmd":"Click","DataOfCmd":"KEY_VOLUP","Option":"false","TypeOfRemote":"SendRemoteKey"}}\`

The TV responds with an acknowledgment. There's no documentation for the full command set — I discovered available keys by decompiling Samsung's own SmartThings app and extracting the key constants. There are over 150 different key codes, from basic navigation to obscure ones like \`KEY_CONVERGENCE\` and \`KEY_MTS\`.

## The Dual-Mode Architecture

The interesting engineering challenge was making both control methods feel identical to the user. I created a \`RemoteController\` interface with methods like \`sendCommand(command: TvCommand)\`. Two implementations — \`IrRemoteController\` and \`WifiRemoteController\` — handle the actual transmission.

A \`ConnectionManager\` class determines which controller to use. If the phone has an IR blaster and the user hasn't set up Wi-Fi, it defaults to IR. If a Wi-Fi TV is connected, it prefers that (because it's more reliable and supports more commands). The user can also force a specific mode in settings.

The tricky part was timing. IR signals are fire-and-forget — you don't get confirmation that the TV received the command. Wi-Fi commands get an acknowledgment, but with 50-200ms latency. For repeat commands (holding the volume button), IR can fire every 100ms but Wi-Fi needs throttling to avoid overwhelming the TV's command queue. I built a rate limiter that adjusts based on the active connection type.

## The Pairing Problem

Samsung TVs have an annoying pairing flow for Wi-Fi control. The first WebSocket connection triggers a popup on the TV asking the user to "Allow" or "Deny" the connection. This only happens once per app name, but if the user denies it (or if the popup times out), the TV blocks that app permanently.

I handle this with a guided setup flow. The app tells the user "Look at your TV — you should see a permission popup. Press Allow on your TV remote." Meanwhile, the app retries the WebSocket connection every 2 seconds for 30 seconds. If the connection succeeds (we receive a \`ms.channel.connect\` event), the pairing is complete. If it times out, the app explains how to reset the TV's external device list.

This was one of those features where the code was simple but the UX required a lot of thought. The actual WebSocket retry is ten lines of Kotlin. The tutorial screens, error messages, troubleshooting steps, and edge case handling around it took two days.

## What I Learned About Hardware Projects

Building a TV remote was a crash course in a world where documentation is scarce, protocols are proprietary, and every device behaves slightly differently. Samsung TVs from 2014 use different IR codes than 2020 models. Some TV firmware versions have broken WebSocket implementations. Some devices report capabilities they don't actually support.

**The biggest lesson:** when building on top of proprietary hardware, your debugging skills matter more than your coding skills. I spent more time with Wireshark capturing WebSocket frames and with an oscilloscope verifying IR timing than I did writing Kotlin. The code itself was straightforward — understanding what the code needed to do was the real challenge.`,
    },
    {
        slug: "why-i-built-my-portfolio-with-nextjs",
        title: "Why I Built My Portfolio with Next.js 16 Instead of a Template",
        description:
            "The case for building your developer portfolio from scratch — custom animations, a proper design system, and what I learned moving from mobile to web development.",
        publishedAt: "2026-01-18",
        readingTime: "5 min read",
        tags: ["Next.js", "React", "TypeScript", "Web Development"],
        content: `Every developer needs a portfolio. Most grab a template, swap in their name, and ship it. I spent three weeks building mine from scratch with Next.js 16, React 19, TypeScript, and Framer Motion. Was it worth the extra time? Absolutely — but not for the reasons you'd think.

## The Template Problem

I tried templates first. I downloaded four of them. They all looked polished until I started customizing. Want to change the color scheme? That's 47 CSS variables scattered across 12 files. Want to add a section? Hope you understand the template author's component architecture. Want dark mode? The template supports it but the implementation is a mess of Tailwind \`dark:\` prefixes with hardcoded fallbacks.

The deeper problem with templates is that they're generic by design. A developer portfolio should reflect how you think about software. If you're showcasing your skills as a frontend developer and your portfolio runs on someone else's code, that's a contradiction.

## The Animation System

The most rewarding part of building from scratch was the animation system. I created 15 reusable animation components with Framer Motion: text reveals that stagger word by word, cards that tilt toward your cursor in 3D, a custom cursor with trailing dots, SVG icons that draw themselves on scroll, spotlight cards with radial gradients that follow your mouse.

Each component is self-contained and configurable. \`SlideUp\` accepts a direction prop (up, down, left, right) and an optional scale. \`TextReveal\` can split by word or character with different animation styles. \`StaggerContainer\` wraps any list and automatically staggers its children's entrance.

The key technical decision was respecting \`prefers-reduced-motion\` in every single component. Roughly 10% of users have this setting enabled due to vestibular disorders or motion sensitivity. Each animation component checks \`useReducedMotion()\` from Framer Motion and either renders a static fallback or skips the animation entirely. This isn't optional polish — it's accessibility compliance.

## Dark Mode Done Right

Most dark mode implementations use Tailwind's \`dark:\` prefix, which requires doubling every color class: \`bg-white dark:bg-gray-900 text-black dark:text-white\`. My approach uses CSS custom properties instead.

I defined semantic color tokens as CSS variables: \`--bg\`, \`--surface\`, \`--card\`, \`--text\`, \`--text-muted\`, \`--accent\`, \`--border\`. Light and dark themes set different values for the same variables. In my components, I use \`bg-bg\`, \`text-text\`, \`border-border\` — single classes that automatically adapt to the active theme.

This approach has three benefits. First, adding a new color only requires defining it in two places (light and dark values) instead of finding every component that uses it. Second, theme transitions are smooth — a single CSS \`transition: color 0.3s, background-color 0.3s\` on the root element animates the entire page. Third, the HTML stays clean — no \`dark:\` prefix clutter.

Tailwind CSS 4 made this even cleaner with the \`@theme inline\` directive. I registered all my CSS variables as Tailwind tokens, so I get autocomplete, type safety, and purging — with the flexibility of CSS custom properties.

## What Next.js 16 Gives You

I chose Next.js for three reasons: static site generation, file-based routing, and the React Server Components model.

Static generation means my portfolio compiles to plain HTML at build time. No server needed, no cold starts, no loading spinners. The blog posts, project pages, and case studies are all pre-rendered. The result is a Lighthouse performance score that's as high as it gets.

Server Components let me keep heavy logic (data fetching, metadata generation) on the server while only shipping interactive code to the client. My project listing page is a server component — it reads the project data and renders HTML. The animation wrappers are client components that hydrate on top. This split keeps the JavaScript bundle small.

File-based routing means adding a new page is creating a new folder. No router configuration, no route definitions. The \`app/blog/[slug]/page.tsx\` file automatically creates dynamic routes for every blog post. Combined with \`generateStaticParams()\`, each post gets its own pre-rendered HTML page.

## The Design System

Instead of picking colors randomly, I built a coherent system. Five accent colors — blue (primary), purple (secondary), amber (warm), orange (coral), and emerald (green) — each with hover variants for both light and dark mode. Each section of the homepage uses a different accent color, creating visual rhythm without looking chaotic.

The typography uses the system font stack — no custom font downloads. Spacing follows a 4px grid. Border radius is consistent across cards, buttons, and badges. Shadows adapt to the theme. Every component respects the same design tokens.

This consistency is what separates a custom portfolio from a template. Templates have good design in isolation, but the parts don't always fit together. When you build the system yourself, every piece is intentional.

## What I Learned Moving from Mobile to Web

Coming from Android development, web development felt simultaneously easier and harder. Easier because the feedback loop is instant — save a file and the browser updates. No build times, no emulator startup. CSS is more expressive than XML layouts. Hot module replacement means you never lose state while iterating on UI.

Harder because the web platform has more footguns. There's no single architecture pattern like MVVM — you choose between dozens of state management approaches. Server-side rendering adds complexity that doesn't exist in mobile. CSS specificity, hydration mismatches, and layout shifts are entire categories of bugs that Android developers never deal with.

The biggest adjustment was thinking in components instead of screens. In Android, you build a screen and it owns its entire lifecycle. In React, you build small composable pieces and assemble them. It's more flexible but requires more upfront design thinking.

## Was It Worth Three Weeks?

Three weeks for a portfolio sounds excessive. But consider what I got: a site I understand completely, an animation library I can reuse in client projects, deep knowledge of Next.js and React, and a portfolio that actually demonstrates the skills it claims to showcase.

The template approach would have saved two weeks and given me a site that looks like every other developer portfolio. The custom approach took longer but produced something that's genuinely mine — and taught me more about web development than any tutorial could.

**If you're deciding between a template and custom:** build it yourself if you have the time. The skills you gain building a portfolio are the same skills clients will pay you for. Just don't let perfectionism stop you from shipping — my first version had half the animations and a simpler design. I iterated from there.`,
    },
];
