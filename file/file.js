var fs = require("fs");

var content = fs.readFileSync(__dirname + "/readme.txt", "utf8");
console.log("Nodule fs readFileSync: " + content);


fs.readFile(__dirname + "/readme.txt", "utf8", function (err, data) {
    console.log("Nodule fs readFile: " + data);
    console.log("=============");
    // console.log("Content has read without wait!");
});
