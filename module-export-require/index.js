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

console.log("=============");
var ClassPerson = require("./personWithoutInit");
var classPerson = new ClassPerson();
classPerson.sayHello();
classPerson.message = "hello world has changed - personWithoutInit";

var classPersonSayAgain = new ClassPerson();
classPersonSayAgain.sayHello();

console.log("=============");
var ClassPersonWithProperty = require("./personWithProperty").Person;
var classPersonWithProperty = new ClassPersonWithProperty();
classPersonWithProperty.sayHello();
classPersonWithProperty.message = "hello world has changed - personWithProperty";

var classPersonWithPropertySayAgain = new ClassPersonWithProperty();
classPersonWithPropertySayAgain.sayHello();
