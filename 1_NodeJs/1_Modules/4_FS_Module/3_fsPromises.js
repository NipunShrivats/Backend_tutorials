// const fs = require("fs");
const fs = require("fs/promises");
const path = require("path");

const fileName = "fsPromises.txt";
const filePath = path.join(__dirname, fileName);
console.log(filePath);

// ---------------------------------------

// Why .then() and .catch()?
// .then() ensures clear chaining of multiple asynchronous operations.
// .catch() centralizes error handling, making it easy to debug and manage failures.
// ------------------------------------
// ------------------------------------

// 1. Read the files present in the current directory
// const file = __dirname;
// fs.readdir(file)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// -----------------------------------------

// 2. write a file
// fs.writeFile(filePath, "this is a promise file.", "utf-8")
//   .then(console.log("File created Successfully"))
//   .catch((err) => console.log(err));

// -----------------------------------------

// 3. read a file
// fs.readFile(filePath, "utf-8")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// -----------------------------------------

// 4. append data
// fs.appendFile(filePath, "\n I have appended this line")
//   .then(console.log("data Appended"))
//   .catch((err) => console.log(err));

// -----------------------------------------

// 5. delete
// fs.unlink(filePath)
//   .then(console.log("File deleted"))
//   .catch((err) => console.log(err));
