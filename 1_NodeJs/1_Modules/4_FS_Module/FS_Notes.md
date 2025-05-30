## File System (FS) Module

1. it is a core module that allows you to work with file system, enabling you to read, write, upate, delete, and watch files.

### 2 types

1. Synchronous
2. Asynchronous

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
