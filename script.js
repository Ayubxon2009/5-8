let letterSearch = ["non", "asal", "banan", "olma", "aziza", "gul", "moshina"];

let wordsWithN = [];
let wordsWithoutN = [];

for (let word of letterSearch) {
    if (word.toLowerCase().includes("н")) {
        wordsWithN.push(word);
    } else {
        wordsWithoutN.push(word);
    }
}

console.log("Слова с 'n':", wordsWithN);
console.log("Слова без 'n':", wordsWithoutN);