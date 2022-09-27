class Person {
  message = "Hello world";
  saySomething() {
    console.log(this.message);
  }

  saySomethingWithParameter(param1, param2) {
    console.log(this.message + " - " + param1 + " - " + param2);
  }
}

const person = new Person();
person.saySomething.call({ message: "call: Hello world" });
person.saySomething.apply({ message: "apply: Hello world" });

person.saySomethingWithParameter.call({ message: "call - with parameter:" }, "param1", "param2");
person.saySomethingWithParameter.apply({ message: "apply - with parameter:" }, ["param1", "param2"]);

module.exports = Person;
