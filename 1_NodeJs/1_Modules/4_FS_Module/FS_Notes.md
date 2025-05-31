## File System (FS) Module

1. it is a core module that allows you to work with file system, enabling you to read, write, upate, delete, and watch files.

### 2 types

1. Synchronous
2. Asynchronous

####

### fs/promises Module

1. It provides a promise-based API for interacting with the filesystem
2. Allowing Asynchronous operations to be handled using modern JavaScript features like Async/await or .then() chains.
3. It is part of the fs module in Node.js but designed for those who prefer promises over callback-based or synchronous methods.

#### NOTE:

--> promise (Pending)
a. .then() -- (Resolve)
b. .catch() -- (Reject)
c. .finally() -- (settled)

#### Purpose:

Simplifies asynchronous file operations by using promises, making the code readable and modern compared to traditional callback-based approaches.

### Advantages

1. No need for manual callbacks
2. cleaner and more intutive asynchronous workflows using async/await.
3. Suitable for modern JavaScript applications.

### Use Cases

1. Reading Files asynchronously in a non-blocking way
2. Writing or appending data to files without blocking the event loop.
3. Performing Multiple File operations sequentially or concurrently with promise chaining
4. handling Errors Gracefully with .catch() or try...catch blocks.
