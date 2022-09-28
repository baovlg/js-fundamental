var fs = require("fs");

var readable = fs.createReadStream(__dirname + "/readme.txt", {
    encoding: "utf8",
    highWaterMark: 16 * 1024
});

readable.on("data", (chunk) => {
    console.log("Stream: " + chunk + " - " + chunk.length);
    console.log("=============");
})

readable.on("close", () => {
    readable.close();
})