var buffer = Buffer.from(" Xin chào", "utf8");
console.log(buffer);
console.log(buffer.toString()); //utf8
console.log(buffer.toString("ascii"));
console.log(buffer.toJSON());
console.log(buffer[2]);
buffer.write("Xín");
console.log(buffer.toString());



module.exports = buffer;