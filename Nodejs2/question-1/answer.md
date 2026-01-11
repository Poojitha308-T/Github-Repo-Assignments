1. Node.js Architecture

Node.js is designed to run JavaScript outside the browser. Its main goal is to handle many tasks at the same time efficiently, especially input/output operations like reading files, network requests, etc.

Node.js uses:

Single main thread

Non-blocking, event-driven architecture

Asynchronous processing

To achieve this, Node.js combines several components working together.

* JavaScript Engine (V8):

-> V8 is the JavaScript engine developed by Google.

->It converts JavaScript code into machine code so the computer can execute it.

->V8 is very fast and is also used in Google Chrome.

->Node.js uses V8 to run JavaScript code on the server.

* Node.js Core APIs

-> Core APIs are built-in features provided by Node.js.

These APIs allow JavaScript to interact with the operating system.

* Native Bindings

-> Native bindings act as a bridge between JavaScript and C/C++ code.

-> They allow JavaScript code to call low-level system functions.

-> Without native bindings, JavaScript could not access system resources like files or sockets.

* Event Loop

-> The event loop is the heart of Node.js.

->It decides which task should be executed next.

-> It allows Node.js to perform non-blocking operations using a single thread.

How it works:

Node.js sends heavy tasks (like file reading) to background helpers.

It continues executing other code.

When a task finishes, its callback is placed in a queue.

The event loop picks it up and executes it.

2. libuv
* What is libuv?

libuv is a C library that provides asynchronous I/O support.

It is used internally by Node.js.

It handles:

Event loop

Thread pool

Timers

Networking

File system operations

-> libuv makes Node.js work the same way on Windows, Linux, and macOS.

* Why Node.js needs libuv

-> JavaScript alone cannot handle system-level async operations.

-> Different operating systems work differently.

-> libuv provides a common layer so Node.js doesn’t worry about OS differences.

-> It enables non-blocking behavior in Node.js.

* Responsibilities of libuv

libuv is responsible for:

-> Managing the event loop

-> Handling asynchronous file I/O

-> Managing the thread pool

-> Handling network operations

-> Managing timers

-> Watching file system changes

3. Thread Pool
* What is a Thread Pool?

-> A thread pool is a set of background threads.

-> These threads handle heavy or blocking tasks.

-> Default size of thread pool in Node.js is 4 threads.

* Why Node.js uses a thread pool

-> Node.js main thread must stay free to handle requests.

-> Some tasks cannot be done asynchronously by the OS.

-> Thread pool helps execute those tasks without blocking the main thread.

* Which operations are handled by the thread pool

Operations that go to the thread pool:

-> File system operations (fs)

-> Cryptography functions (crypto)

-> Compression (zlib)

-> DNS lookups (some cases)

4. Worker Threads
* What are Worker Threads?

-> Worker threads are separate JavaScript threads.

Each worker has its own:

-> Event loop

-> Memory

-> V8 instance

* Why are Worker Threads needed?

-> JavaScript code is CPU-intensive sometimes.

-> Heavy calculations block the event loop.

-> Worker threads allow running heavy JavaScript tasks in parallel.

* Difference between Thread Pool and Worker Threads
Thread Pool	Worker Threads
Used internally by Node.js	Used by developers
Handles native tasks	Handles JavaScript code
Shared automatically	Must be created manually
No JS execution	Executes JS code

5. Event Loop Queues

Node.js uses different queues to manage tasks.

* Macro Task Queue

Contains large asynchronous tasks.

Examples:

setTimeout

setInterval

setImmediate

I/O callbacks

* Micro Task Queue

Contains small and high-priority tasks.

Executed immediately after current operation.

Examples:

Promise.then()

Promise.catch()

queueMicrotask()

process.nextTick()

* Execution Priority Between Queues

Current JavaScript execution

Micro Task Queue

Macro Task Queue

* Examples of Tasks in Each Queue

Micro Task Queue Examples:

Promise.resolve().then(() => console.log("Promise"));
process.nextTick(() => console.log("Next Tick"));

Macro Task Queue Examples:

setTimeout(() => console.log("Timeout"), 0);
setImmediate(() => console.log("Immediate"));