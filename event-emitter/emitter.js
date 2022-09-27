var emitter = require("events");
var eventConfig = require("./config");

class Dialog extends emitter {
  message = "";

  // constructor() {
  //   super();
  // }

  sayHello() {
    this.emit(eventConfig.events.BAD)
  }
}

var dialog = new Dialog();
dialog.on(eventConfig.events.BAD, function () {
  console.log("Event emitter: use config - This is bad day extended");
});
dialog.sayHello();
