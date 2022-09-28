function parentFunction(callback) {
    console.log("Callback: parentFunction is called");
    callback("Callback: childFunction is called");
}

function childFunction(message) {
    console.log(message);
}

parentFunction(childFunction);

module.exports = 12;