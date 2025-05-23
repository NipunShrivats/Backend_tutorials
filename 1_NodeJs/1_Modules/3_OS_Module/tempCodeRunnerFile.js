const os = require("os");

// 1.
console.log("platform: ", os.platform());
// 2.
console.log("user: ", os.userInfo());
// 3.
console.log("CPU Architecture: ", os.arch());
// 4.
console.log("Free Memory: ", os.freemem(), "bytes");
