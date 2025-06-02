// --> Objective

// Listens for multiple types of user events(eg, login, logout, purchase and profile update).
// Tracks how many times each event is emitted
// Logs a summary of all event occurences when a special summary event is triggered.

// Emit events
// -------------------------

const EventEmitter = require("events");
const emitter = new EventEmitter();

const eventCounts = {
  "user-login": 0,
  "user-purchase": 0,
  "user-update": 0,
  "user-logout": 0,
};

emitter.on("user-login", (username) => {
  eventCounts["user-login"]++;
  console.log(`${username} logged in!`);
});
emitter.on("user-purchase", (username, item) => {
  eventCounts["user-purchase"]++;
  console.log(`${username} purchased ${item}`);
});
emitter.on("user-update", (username, item) => {
  eventCounts["user-update"]++;
  console.log(`${username} updated their ${item}!`);
});
emitter.on("user-logout", (username) => {
  eventCounts["user-logout"]++;
  console.log(`${username} logged out!`);
});

emitter.on("summary", () => {
  console.log(eventCounts);
});

// Emit Events
emitter.emit("user-login", "Nipun Rawat");
// emitter.emit("user-purchase", "Nipun Rawat", "Laptop");
// emitter.emit("user-update", "Nipun Rawat", "email id");
// emitter.emit("user-logout", "Nipun Rawat");
emitter.emit("summary");
