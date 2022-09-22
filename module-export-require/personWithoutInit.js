class Person {
  message = "person say hello world!";
  sayHello() {
    console.log(this.message);
  }
}

module.exports = Person;
