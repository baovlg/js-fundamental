var EventEmitter = require("events");

/**
 * var util = require("util");
 *
 * // inherits has remove
 * function Dialog() {
 *    this.message = "Hello world";
 * }
 *
 * util.inherits(Dialog, EventEmitter);
 */

class Dialog extends EventEmitter {
  message = "Hello world";

  sayHello() {
    this.emit("saySth", this.message);
  }
}

const dialog = new Dialog();
dialog.on("saySth", function () {
  console.log("Message from system: " + this.message);
});

dialog.sayHello();
