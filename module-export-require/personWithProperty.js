class Person {
  message = "personWithProperty say hello world!";

  sayHello() {
    console.log(this.message);
  }
}

module.exports.Person = Person;
