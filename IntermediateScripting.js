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