let letterSearch = ["non", "asal", "banan", "olma", "aziza", "gul", "moshina"];

let wordsWithN = [];
let wordsWithoutN = [];

for (let word of letterSearch) {
    if (word.toLowerCase().includes("n")) {
        wordsWithN.push(word);
    } else {
        wordsWithoutN.push(word);
    }
}

console.log("'n' harfi bor so'zlar:", wordsWithN);
console.log("'n' harfi yo'q so'zlar:", wordsWithoutN);