// Import EventEmitter class
const EventEmitter = require("events");

// --> Creating an instance
const emitter = new EventEmitter();

// // 1. Define an event listner (emitter.on)
// emitter.on("greet", (user, age) => {
//   console.log(`Hello ${user}, you are ${age} old`);
// });
// // 2. Trigger (emitter.emit)
// emitter.emit("greet", "Nipun", 20);

// ----------------------------

emitter.on("greet", (args) => {
  console.log(`Hello ${args.user}, you are ${args.age} old`);
});
emitter.emit("greet", { user: "Nipun", age: 20 });
