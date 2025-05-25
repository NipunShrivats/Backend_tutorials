const fs = require("fs");
const path = require("path");

// Synchronous way

// 1. create file

// const fileName = "test.txt";
// const filePath = path.join(__dirname, fileName);

// const writeFile = fs.writeFileSync(
//   filePath,
//   "This is the initial Data",
//   "utf-8"
// );

// -------------------------------------------------------

// 2. Read file
// const readFile = fs.readFileSync(filePath);
// console.log(readFile.toString());

// ---- or ----
// const readFile = fs.readFileSync(filePath, "utf-8");
// console.log(readFile);

// -------------------------------------------------------

// 3. Update data (append) // appends new previous, if no file foudn will create a file

// const appendFile = fs.appendFileSync(filePath, "\nTeri aisi ki taisi", "utf-8");

// -------------------------------------------------------

// 4. Delete file (unlink)

// const delFile = fs.unlinkSync(filePath);
// -------------------------------------------------------
// 4. Rename file
const oldFileName = "test.txt";
const oldFilePath = path.join(__dirname, oldFileName);

const NewfileName = "FaltuFile.txt";
const NewfilePath = path.join(__dirname, NewfileName);
const reFile = fs.renameSync(oldFilePath, NewfilePath);

// -------------------------------------------------------
