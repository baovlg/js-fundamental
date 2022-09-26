const moduleExportRequire = require("./module-export-require");
moduleExportRequire;
console.log("=============");

const util = require("./util");
console.log(util);
console.log("=============");

const url = require("./url");
console.log(url);
console.log("=============");

const eventEmitter = require("./event-emitter");
eventEmitter;
console.log("=============");

var Object = require("./object");
var personal = new Object("First-name", "Last-name");
personal.getFullName();
console.log("=============");

var EventEmitter = require("./inherit/event-emitter");
EventEmitter;
console.log("=============");

var templateLiterals = require("./template-literals");
console.log(templateLiterals);
console.log("=============");
