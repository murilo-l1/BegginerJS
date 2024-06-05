const toBinary = (binNumber) => parseInt(binNumber, 2);

let binNumber = "11111";

console.log("\nBinary Conversion: " + binNumber + " -> " + toBinary(binNumber));

//perform parsing on titles to be used in URLS
const formatToURL = (title) => {
    const wrappedWords = title.toLowerCase().trim().split(" ");
    const filteredWords = wrappedWords.filter(word => word !== "");
    return filteredWords.join("-");
}
console.log(formatToURL(" Winter is  Coming "));