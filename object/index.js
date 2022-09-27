var util = require("util");

function ObjectSimulator() {
  this.name = "name";
  this.phone = "phone";
}

ObjectSimulator.prototype.address = "address";

ObjectSimulator.prototype.saySomething = function (message = "") {
  console.log(`Object${message}: ` + this.name + " - " + this.phone + " - " + ObjectSimulator.prototype.address);
}


function Child() {
  this.id = 123;
}

util.inherits(Child, ObjectSimulator);
/**
 *  Child.prototype = Object.create(ObjectSimulator.prototype);
 */

const child = new Child();
child.saySomething();

function ChildWithCallFunction() {
  ObjectSimulator.call(this);
  this.id = 123;
}

util.inherits(ChildWithCallFunction, ObjectSimulator);
/**
 *  Child.prototype = Object.create(ObjectSimulator.prototype);
 */

const childWithCAllFunction = new ChildWithCallFunction();
childWithCAllFunction.saySomething(" call function");

class ChildExtend extends ObjectSimulator {
  id = 0;
}
const childExtend = new ChildExtend();
childExtend.saySomething(" extend");