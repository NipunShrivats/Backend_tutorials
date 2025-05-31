const fs = require("fs/promises");
const path = require("path");

const fileName = "fsPromises.txt";
const filePath = path.join(__dirname, fileName);
console.log(filePath);

const file = __dirname;

// -----------------------------------

// 1. read directory
// const readFolder = async () => {
//   try {
//     const res = await fs.readdir(file);
//     console.log(res);
//   } catch (err) {
//     console.log(err);
//   }
// };
// readFolder();

// -----------------------------------

// 2. write file
// const writeFile = async () => {
//   try {
//     await fs.writeFile(filePath, "Yeh le new file", "utf-8");
//     console.log("File created");
//   } catch (err) {
//     console.log(err);
//   }
// };

// writeFile();

// -----------------------------------

// 3. read file
// const readFile = async () => {
//   try {
//     const data = await fs.readFile(filePath, "utf-8");
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };
// readFile();

// -----------------------------------

// 4. update file
// const updateFile = async () => {
//   try {
//     await fs.appendFile(filePath, "\nNaya data padh le", "utf-8");
//     console.log("data updated..");
//   } catch (err) {
//     console.log(err);
//   }
// };
// updateFile();

// -----------------------------------

// 5. delete file
const deleteFile = async () => {
  try {
    await fs.unlink(filePath);
    console.log("file deleted");
  } catch (err) {
    console.log(err);
  }
};
deleteFile();
