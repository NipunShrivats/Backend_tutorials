const os = require("os");

// 1.
console.log("platform: ", os.platform());
// 2.
console.log("user: ", os.userInfo());
// 3.
console.log("CPU Architecture: ", os.arch());
// 4.
console.log("Free Memory: ", os.freemem(), "bytes");
// 5.
console.log("Total Memory: ", os.totalmem(), "bytes");
// 6.
console.log("uptime: ", os.uptime(), "seconds");
// 7.
console.log("Home Directorey:", os.homedir());
// 8.
console.log("Host Name:", os.hostname());
// 9.
console.log("Network Interfaces:", os.networkInterfaces());
// 10.
console.log("CPU Info:", os.cpus());
// 11.
console.log("Temporary directory:", os.tmpdir());
// 12.
console.log("Operating System:", os.type());
