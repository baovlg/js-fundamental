class Class {
  firstName = "";
  lastName = "";

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName = function () {
    console.log("Class: " + this.firstName + " " + this.lastName);
  };
}

module.exports = new Class;


/** */

var util = require("util")

class ObjectSimulator {
  name = "name";
  phone = "phone";

  saySomething() {
    console.log("Class: " + this.name + " - " + this.phone + " - " + ObjectSimulator.prototype.address);
  }
}

ObjectSimulator.prototype.address = "address";

ObjectSimulator.prototype.saySomethingWithProperty = function () {
  console.log("from property: " + this.name + " - " + this.phone + " - " + ObjectSimulator.prototype.address);
}

function Child() {
  this.id = 123;
}

util.inherits(Child, ObjectSimulator);

const child = new Child();
child.saySomething();
child.saySomethingWithProperty();

class ChildExtend extends ObjectSimulator {
  id = 0;
}
const childExtend = new ChildExtend();
childExtend.saySomething();
childExtend.saySomethingWithProperty();