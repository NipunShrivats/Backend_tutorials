// Path Module //

const path = require("path");

// console.log(__dirname);
// console.log(__filename);

// 1. path.join()
const filePath = path.join("folder", "students", "data.txt");
console.log("filePath: ", filePath);

// 2. path.parse()
const parse = path.parse(filePath);
console.log("parse: ", parse);

// 3 path.resolve()
const resolvePath = path.resolve(filePath);
console.log("resolvePath: ", resolvePath);

// 4. path.extname();
const extname = path.extname(filePath);
console.log("extname: ", extname);

// 5. path.basename();
const basename = path.basename(filePath);
console.log("basename: ", basename);

// 6.
// path.dirname();
const dirname = path.dirname(filePath);
console.log("dirname: ", dirname);

// 7. path.sep;
console.log(path.sep);
