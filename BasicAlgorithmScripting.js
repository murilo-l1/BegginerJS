const reverseString = (str) =>{
    const size = str.length;
    let reversedString = "";

    for(let i = size - 1; i >= 0; i--){
        reversedString = reversedString + str.charAt(i);
    }
    return reversedString;
}
console.log(reverseString("murilo"));

const twoSum = (arr, target) =>{
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === target){
                return [arr[i], arr[j]];
            }
        }
    }
}
console.log(twoSum([3,9,10], 13));

function largestOfFour(arr) {
    const size = arr.length;
    let largestElement;
    let largestArray = [];

    for (let i = 0; i < size ; i++) {
        largestElement = arr[i][0];
        for (let j = 0; j < size; j++) {
            if(arr[i][j] > largestElement){
                largestElement = arr[i][j];
            }
        }
        largestArray.push(largestElement);
    }
    return largestArray;
}
console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));

const myEndsWith = (str, target) => {
    const sizeOfTarget = target.length;
    const sizeOfStr = str.length;
    const sizeOfStrWithoutTarget = sizeOfStr - sizeOfTarget;

    let verifyString = "";

    for(let i = sizeOfStrWithoutTarget; i < sizeOfStr; i++){
        verifyString += str[i];
    }

    return verifyString === target;

}
console.log(myEndsWith("Open sesame", "same"));

const myRepeatString = (str, num) => {
    if(num <= 0){
        return "";
    }
    let repeatedStr = "";
    for(let i = 0; i < num; i++){
        repeatedStr = repeatedStr + str;
    }
    return repeatedStr;
}
console.log(myRepeatString("abc", 3));

const truncateString = (str, num) => {
    if(str.length <= num)
        return str;

    let truncatedStr = "";
    for(let i = 0; i < num; i++){
        truncatedStr += str[i];
    }

    return truncatedStr + "...";

}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

const truthTest = (arr, func) => {

    for(let i = 0; i < arr.length; i++){
        if(func(arr[i]))
            return arr[i];
    }
    return undefined;
}
console.log(truthTest([1, 2, 3, 4], num => num % 2 === 0));

//exactly equal types, not just meaning
const booWho = (bool) => {

    return bool === true || bool === false;
}
console.log(booWho(null));

const titleCase = (str) => {
    let words = str.split(" "); //dividindo a string em palavras
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 1) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
        }
        else{
            words[i] = words[i].toUpperCase();
        }
    }
    return words.join(" ");
}
console.log(titleCase("I'm a little tea pot"));

const frankenSplice = (arr1, arr2, n) => {
    if(n === 0 || arr2 === []){
        return arr1;
    }
    let newArray = arr2.slice(); //guardando o conteudo de arr2 numa nova arr

    for(let i = 0; i < arr1.length; i++){
        newArray.splice(n,0,arr1[i]); //apartir de n não removeremos nada e colocaremos nas posicoes seguintes os elementos de arr1
        n++;
    }

    return newArray;
}
console.log((frankenSplice([1, 2, 3], [4, 5, 6], 1)));

//filtering all falsy elements by existing case
const bouncer = (arr) => {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i])
            filteredArr.push(arr[i]);
    }
    return filteredArr;
}
console.log(bouncer([7, "ate", "", false, 9]));

const findIndexToInsert = (arr, num) => {
    if(arr.length < 2 || arr === []){
        return 0;
    }
    arr.sort((a,b) => a - b); //ordenando asc
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        if(arr[arr.length - 1] < num){
            return arr.length;
        }
        if(arr[i] === num){
            return i;
        }
        if(num > arr[i] && num < arr[i + 1]){
            return i + 1;
        }
    }
}
console.log(findIndexToInsert([3, 10, 5], 3));

const mutation = (arr) => {
    const wordsToMatch = arr[1].toLowerCase().split("");
    const secondStr = arr[0].toLowerCase();
    for (const word of wordsToMatch) {
        if(secondStr.indexOf(word) === - 1){
            return false;
        }
    }
    return true;
}
console.log(mutation("ate", "date"));

function chunkArrayInGroups(arr, size) {
    let resultArr = [];
    while(arr.length > 0){
        resultArr.push(arr.splice(0, size));
    }
    return resultArr;
}
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));