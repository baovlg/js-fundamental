let letKeyWord = "Let key word: global";

if (letKeyWord === "Let key word: global") {
    let letKeyWord = "Let key word: local";

    console.log(letKeyWord);
    // letKeyWord output: "Let key word: local"
}

console.log(letKeyWord);
// letKeyWord output: "Let key word: global"

module.exports = letKeyWord;