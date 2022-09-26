class Person {
  message = "personWithoutInit say hello world!";

  sayHello() {
    console.log(this.message);
  }
}

module.exports = Person;
