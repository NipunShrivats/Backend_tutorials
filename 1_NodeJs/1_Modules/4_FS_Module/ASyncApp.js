const fs = require("fs");
const path = require("path");

// ASynchronous way

// 1. create file

const fileName = "fsAsync.txt";
const filePath = path.join(__dirname, fileName);

// fs.write(path, data, options, callback); // we can use callback

// const writeFile = fs.writeFile(
//   filePath,
//   "This is the initial Data",
//   "utf-8",
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("File has been saved");
//     }
//   }
// );

// -------------------------------------------------------

// 2. Read file

// const readFile = fs.readFile(filePath, "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// -------------------------------------------------------

// 3. Update data (append) // appends new previous, if no file foudn will create a file

// const appendFile = fs.appendFile(
//   filePath,
//   "\nTeri aisi ki taisi",
//   "utf-8",
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("file has been updated");
//     }
//   }
// );

// -------------------------------------------------------

// 4. Delete file (unlink)

// const delFile = fs.unlink(filePath, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("file deleted");
//   }
// });

// -------------------------------------------------------
// 4. Rename file
// const oldFileName = "fsAsync.txt";
// const oldFilePath = path.join(__dirname, oldFileName);

// const NewfileName = "FaltuFile.txt";
// const NewfilePath = path.join(__dirname, NewfileName);
// const reFile = fs.rename(oldFilePath, NewfilePath, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("file name updated");
//   }
// });

// -------------------------------------------------------
