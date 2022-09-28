var fs = require("fs");
var zlib = require("zlib");

var readable = fs.createReadStream(__dirname + "/readme.txt", {
    encoding: "utf8",
    highWaterMark: 16 * 1024
});

var writable = fs.createWriteStream(__dirname + "/readme-copy.txt");
var compressed = fs.createWriteStream(__dirname + "/readme-copy.txt.gz")

readable.on("close", () => {
    readable.close();
})

readable.on("data", (chunk) => {
    console.log("Pipe: " + chunk);
    console.log("=============");
})

// copy
readable.pipe(writable);

// compress
readable.pipe(zlib.createGzip()).pipe(compressed);

