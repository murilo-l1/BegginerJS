const toBinary = (binNumber) => parseInt(binNumber, 2);

let binNumber = "11111";

console.log("\nBinary Conversion: " + binNumber + " -> " + toBinary(binNumber));

//export in practice

module.exports = {toBinary};