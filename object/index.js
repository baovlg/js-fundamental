class Object {
  firstName = "";
  lastName = "";

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName = function () {
    console.log("Object: " + this.firstName + " " + this.lastName);
  };
}

module.exports = Object;
