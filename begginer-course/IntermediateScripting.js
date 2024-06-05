const sumAll = (nums) => {
    if(nums[0] === nums[1]) return 0;

    let firstElement = nums[0];
    let lastElement = nums[1];
    let sum = 0;

    if(nums[0] > nums[1]){
        firstElement = nums[1];
        lastElement = nums[0];
    }

    for (let i = firstElement; i <= lastElement ; i++) {
        sum = sum + i;
    }

    return sum;
}
console.log(sumAll([10, 5]));

//diffArray() found unique elements in both arrays and push them to the newArr that will be returned
const diffArray = (arr1, arr2) => {
    const mergedArr = arr1.concat(arr2);
    const newArr = [];
    for (let i = 0; i < mergedArr.length; i++) {
        if(arr2.indexOf(mergedArr[i]) === -1 || arr1.indexOf(mergedArr[i]) === -1){
            newArr.push(mergedArr[i]);
        }
    }
    return newArr;
}
console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));

const destroyer = (arr, ...numsToBeDestroyed) => {
    if(numsToBeDestroyed === null){
        return arr;
    }
    const numsToDestroy = [...numsToBeDestroyed];

    return arr.filter(element => !(numsToDestroy.includes(element)));
}
console.log(destroyer([2, 3, 2, 3], 2, 3));
const whatIsInAName = (collection, source) => {
    let matchObjs = [];
    const sourceKeys = Object.keys(source);
    for (let i = 0; i < collection.length; i++) {
        let foundMatch = true; //flag booleana para deixar passar objetos que não satisfazem a propiedade
        for(const sourceProp in source){
            if(collection[i][sourceProp] !== source[sourceProp]){
                foundMatch = false;
            }
        }
        if(foundMatch){
            matchObjs.push(collection[i]);
        }
    }
    return matchObjs;
}
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
const spinalCase = (str) => {
    const findCamelCase = /([a-z])([A-Z])/g;
    const splitterRegex = /[\s+_.]/;
    let splittedStr;
    if(findCamelCase.test(str)){
        const camelCaseFound = str.replace(findCamelCase, "$1 $2");
        splittedStr = camelCaseFound.toLowerCase().split(splitterRegex);
        return splittedStr.join("-");
    }else {
        splittedStr = str.toLowerCase().split(splitterRegex);
        return splittedStr.join("-");
    }
}
console.log(spinalCase('thisIsSpinalTap'));
const translatePigLatin = (str) => {
    const firstVowelIndex = str.search(/[aeiou]/);
    if(firstVowelIndex === 0){
        return str.concat("way");
    }
    return str.substring(firstVowelIndex, str.length) + str.substring(0, firstVowelIndex) + "ay";
}
console.log(translatePigLatin("algorithm"));
const myReplace = (str, before, after) => {
    let wrappedAfter = "";
    if(before.charAt(0) === before.charAt(0).toUpperCase()){
         wrappedAfter = after.charAt(0).toUpperCase() + after.substring(1);
        return str.replace(before,wrappedAfter);
    }
    if(before.charAt(0) === before.charAt(0).toLowerCase()){
        wrappedAfter = after.charAt(0).toLowerCase() + after.substring(1);
        return str.replace(before,wrappedAfter);
    }
    return str.replace(before,after);
}
console.log(myReplace("I think we should look up there", "up", "Down"));

const pairDnaElements = (str) => {
    const elements = str.split("");
    const dnaPairs = [];
    for (const element of elements) {
        if(element === 'C'){
            dnaPairs.push([element, 'G']);
        }
        else if(element === 'G'){
            dnaPairs.push([element, 'C']);
        }
        else if(element === 'A'){
            dnaPairs.push([element, 'T']);
        }
        else if(element === 'T'){
            dnaPairs.push([element, 'A']);
        }
        else{
            console.log("Not an DNA Element");
        }
    }
    return dnaPairs;
}
console.log(pairDnaElements("ATCGA"));
const findMissingLetter = (str) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const startIndex = alphabet.indexOf(str[0]);
    const endIndex = alphabet.indexOf(str[str.length - 1]);

    const range = alphabet.substring(startIndex, endIndex + 1);

    for (let i = 0; i < range.length; i++) {
        if(range[i] !== str[i]){
            return range[i];
        }
    }
    return undefined;
}
console.log(findMissingLetter("abdefg"));

const uniteUnique = (arr, ...otherArrays) => {
    const arrCopy = [arr];
    const mergedArrays = arrCopy.concat(otherArrays);
    const uniqueArray = [];

    for (let i = 0; i < mergedArrays.length; i++) {
        for (let j = 0; j < mergedArrays[i].length; j++) {
            if(uniqueArray.indexOf(mergedArrays[i][j]) === -1){
                uniqueArray.push(mergedArrays[i][j]);
            }
        }
    }
    return uniqueArray;
}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

const convertHTML = (str) => {
    let htmlStr = str;

    for(let i = 0; i < str.length; i++){
        switch (str.charAt(i)){
            case '\"': htmlStr = htmlStr.replaceAll('\"', '&quot;');
            break;
            case '&': htmlStr = htmlStr.replaceAll('&','&amp;');
            break;
            case '<': htmlStr = htmlStr.replaceAll('<', '&lt;');
            break;
            case '>': htmlStr = htmlStr.replaceAll('>', '&gt;');
            break;
            case '\'': htmlStr = htmlStr.replaceAll('\'', '&apos;');
            break;
        }
    }
    return htmlStr;
}
console.log(convertHTML('Stuff in "quotation marks"'));

const fib = (num) => {
    if(num === 0){
        return 0;
    }
    else if(num === 1){
        return 1;
    }else {
        return fib(num - 1) + fib(num - 2);
    }
}
console.log(fib(5));

const sumFibs = (num) => {
    let sum = 0;
    let prev= 0;
    let curr= 1;

    while(curr <= num){
        if(curr % 2 !== 0){
            sum += curr;
        }
        const next = prev + curr;
        prev = curr;
        curr = next;
    }
    return sum;
}
console.log(sumFibs(5));

const sumPrimes = (num) => {
    let sum = 0;
    function checkPrime(num){ //helper method based on the 2 - sqrt division
        const sqrt = Math.sqrt(num);
        for (let i = 2; i <= sqrt; i++) {
            if(num % i === 0){
                return false;
            }
        }
        return true;
    }
    //considering any value < 2 is not prime, we check for every num (2 - num)
    for (let i = 2; i <= num ; i++) {
        if(checkPrime(i))
            sum += i;
    }
    return sum;
}
console.log(sumPrimes(10));

const dropElements = (arr, func) => {
    let droppedArr = [];
    for (const element of arr) {
        if(func(element)){
            droppedArr = arr.slice(arr.indexOf(element), arr.length);
            return droppedArr;
        }
    }
    return droppedArr;
}
console.log(dropElements([1, 2, 3], function(n) {return n % 2 === 0;}));

const binaryAgent = (str) => {
    const getBinaryChars = str.split(/\s+/);
    const getCharCodes = getBinaryChars.map(binaryCode => parseInt(binaryCode, 2));
    const getWords = getCharCodes.map(charCode => String.fromCharCode(charCode));
    return getWords.join("");
}
console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 " +
    "01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

const truthCheck = (collection, pre) => collection.every(obj => obj[pre]);
console.log(truthCheck(
    [
    {name: "Quincy", role: "Founder", isBot: false},
    {name: "Naomi", role: "", isBot: false},
    {name: "Camperbot", role: "Bot", isBot: true}
], "isBot"));

const smallestCommons = (arr) => {

    //fixing the array if given switched positions
    const [min, max] = arr.sort((a,b) => a - b);
    const numberOfDivisor = (max - min) + 1;

    //get upperBound (a multiplicacao de todos os numeros do intervalo)
    let upperBound = 1;
    for (let i = min; i <= max ; i++) {
        upperBound = upperBound * i;
    }

    // agora o multiplo avança de max em max até o maior multiplo (upperbound) e testa para todos do intervalo se é ou não divisivel
    for (let multiple = max; multiple <= upperBound; multiple = multiple + max) {
        let divisorCount = 0;
        for (let i = min; i <= max ; i++) {
            if(multiple % i === 0)
                divisorCount++
        }
        if(divisorCount === numberOfDivisor){
            return multiple;
        }
    }
}
console.log(smallestCommons([2, 10]));


const getMaxDepth = (arr, depth = 1) => {
    let maxDepth = depth;

    for (const arrElement of arr) {
        if(Array.isArray(arrElement)){
            const nestedDepth = getMaxDepth(arrElement, depth + 1);
            if(nestedDepth > maxDepth){
                maxDepth = nestedDepth;
            }
        }
    }
    return maxDepth;
}

const myFlat = (arr) => {
    const flattedArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])){
            flattedArr.push(...myFlat(arr[i])); // desse jeito eu consigo separar toda a array em elementos individuais, entrando nas camadas da profundidade
        }
        else{
            flattedArr.push(arr[i]);
        }
    }
    return flattedArr;
}
console.log(myFlat([1, [2], [3, [[4]]]]));

const Person = function(first, last) {
    let firstName = first;
    let lastName = last;

    this.getFirstName = function() {
        return firstName;
    };
    this.getLastName = function(){
        return lastName;
    };
    this.getFullName = function(){
        return this.getFirstName() + " " + this.getLastName();
    }
    this.setFirstName = function(newFirst){
        return firstName = newFirst;
    };
    this.setLastName = function(newLast){
        return lastName = newLast;
    };
    this.setFullName = function(newFirst, newLast){
        this.setFirstName(newFirst);
        this.setLastName(newLast);
        return this.getFullName();
    };
};

const orbitalPeriod = (arr) => {
    const GM = 398600.4418;
    const pi = Math.PI;
    const earthRadius = 6367.4447;
    const transformedObj = [];

    for (let i = 0; i < arr.length; i++) {
        let name = arr[i].name;
        const orbPeriod = Math.round((2 * pi) * Math.sqrt((Math.pow((earthRadius + arr[i].avgAlt), 3)/GM)));
        transformedObj.push({name: name, orbitalPeriod: orbPeriod});
    }
    return transformedObj;
}
console.log(orbitalPeriod([{name: "sputnik", avgAlt: 35873.5553}]));

//addtogetherImpl to explore the return of a function
const addTogether = (...params) => {
    const [first, second] = [params[0], params[1]];
    const isNum = (num) => ((typeof(num) === 'number' && Number.isFinite(num)) === true);

    function addSecond(second){
        if(isNum(second)){
            return first + second;
        }
    }

    if(isNum(first)){
        if(params.length === 1) return addSecond;
        if(params.length === 2) return addSecond(second);
    }
}
console.log(addTogether(2, 2));