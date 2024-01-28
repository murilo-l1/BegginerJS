const myStr = "The red fox jumps over the black dog";
const myRgx = /fox|red|dog/i;
console.log(myRgx.test(myStr));

const phrase = "Repeat, repeat repeat";
const repeatRgx = /repeat/gi;
console.log(phrase.match(repeatRgx));

const vogalsRgx = /[aeiou]/gi;
console.log(phrase.match(vogalsRgx));

const divideWords = /[a-z]/ig;
console.log(myStr.match(divideWords));

const quote = "2345678 ta na hora de molhar o biscoito";
const matchOnlyWordsRgx =  /[^012345678 ]/gi; //excluindo qualquer numero ou espaco em branco de ser detectado
console.log(quote.match(matchOnlyWordsRgx));