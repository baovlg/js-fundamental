var hello = require("./hello");
var helloByProperty = require("./hello").sayHello;
var helloAnotherWay = require("./helloAnotherWay");
var helloByExport = require("./helloWithExport");

hello();
helloByProperty();
helloAnotherWay.helloThere();
helloByExport.sayHelloWithExport(); // like helloByProperty


console.log("=============");
var person = require("./person");
person.sayHello();
person.message = "hello world has changed";

var personSayAgain = require("./person");
personSayAgain.sayHello();

console.log("=============")
var ClassPerson = require("./personWithoutInit");
var classPerson = new ClassPerson();
classPerson.sayHello();
classPerson.message = "hello world has changed";

var ClassPersonAnother = new ClassPerson();
ClassPersonAnother.sayHello();
