var util = require("util");
var name = "admin";
var message = util.format("Hello %s", name);

module.exports = util.log(message);
