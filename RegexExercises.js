const extractEmails = (text) => {
    const myRegex = /[a-zA-Z0-9._%+-]+@+[a-zA-Z0-9._%+-]+[.com]/g;

    return text.match(myRegex);
}
const text = "Email me at user@example.com or contact me at another_user@gmail.com. For more information, you can also reach out to info@example.com.";
console.log(extractEmails(text));

const findLongestWordLengthUsingRegex = (str) => {
    let longestLength = 0;
    let longestWord = '';
    const findWords = /[\w+-]+/gi;
    const words = str.match(findWords);

    for(const word of words)
    {
        if(word.length > longestLength){
            longestLength = word.length;
            longestWord = word;
        }
    }
    return {longestWord, longestLength};
}

console.log(findLongestWordLengthUsingRegex("The quick brown fox jumped over the lazy dog"));

const decodeMessage = (message) => {
    const findWords = /[a-z]/gi;

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase().split("");
    const invertedAlphabet = "ZYXWVUTSRQPONMLKJIHGFEDCBA".toLowerCase().split("");
    let wordsOfMessage = message.match(findWords);
    let decodedMessage = '';

    for(let i = 0; i < wordsOfMessage.length; i++){
        const alphabetIndex = alphabet.indexOf(wordsOfMessage[i]);
        if(alphabetIndex !== -1){
            decodedMessage += invertedAlphabet[alphabetIndex];
        }else{
            decodedMessage += wordsOfMessage[i];
        }
    }
    return decodedMessage;
}
const message = "svool dliow!";

console.log(decodeMessage(message));

const myTrim = (s) => s.replace(/^\s+|\s+$/g, "");

const wrongMessage = " Wrong Typed Message!  ";
console.log(myTrim(wrongMessage));

const parseDateIntoBrazilianFormat = (globalDateFormat) =>{
    const dateFormatRegex = /(\d{2})-(\d{2})-(\d{4})/g;
    return globalDateFormat.replace(dateFormatRegex, "$2-$1-$3");
}

const globalDateExample = "07-20-2003";
console.log(parseDateIntoBrazilianFormat(globalDateExample));