var Emitter = require("./emitter-clone");
var emitter = new Emitter();

emitter.on("bad", function () {
  console.log("This is bad day");
});

emitter.on("bad", function () {
  console.log("This is bad day extended");
});

emitter.emit("bad");

var eventConfig = require("./config");

emitter.on(eventConfig.events.BAD, function () {
  console.log("This is bad day");
});

emitter.on(eventConfig.events.BAD, function () {
  console.log("This is bad day extended");
});

emitter.emit(eventConfig.events.BAD);
