<!-- Module in Node.Js -->

// Self Contained Code Unit //

1. Each file in NodeJs is treated as a separate Module
2. Variables, Functions, or Objects defined in one file are not accessible in another file by default unless you explicitly export them.

// Encapsulation //

1. Nodejs uses CommonJS module system(module.exports and require) to ensure the code in one file does not pollute or interfere with the global scope.
2. this makes your code modular, maintainable and easier to debug.

--> need
// module.exports
// require()
