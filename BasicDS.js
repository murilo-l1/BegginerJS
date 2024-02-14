//.shift() e .pop() examples
const popShift = (arr) => {
    let shifted = arr.shift(); //get first element
    let popped = arr.pop(); // get last element
    return [shifted, popped];
}
console.log(popShift(['challenge', 'is', 'not', 'complete']));

//.splice() example - removing certain elements and replacing them
const changeHtmlColours = (colors) =>{
    const startIndex = 0;
    const numberOfRemoved = 2;
    colors.splice(startIndex, numberOfRemoved, 'DarkSalmon', 'BlanchedAlmond'); // colors[start] - color[numberRemoved] = replace items
    return colors;
}
console.log(changeHtmlColours(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

//.slice() example - extracting data
const forecast = (arr) => {
    const initialIndex = 2;
    const lastIndex = 4;
    const newArray = arr.slice(initialIndex, lastIndex);
    return newArray;
}
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

//...arr spread operator example - easily copy elements
const createNewSentence = (words) =>{
    return ['learning', ...words, 'is', 'exciting'];
}
console.log(createNewSentence(['to', 'code']));

//.indexOf() example - checks where something is in the array (if exists)
function quickCheck(arr, elem) {
    if(arr.indexOf(elem) !== -1){
        return true;
    }
    return false;
}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

const filterArray = (nestedArray, elementToFilter) => {
    let filteredArray = [];
    for (let i = 0; i < nestedArray.length; i++) {
        if(nestedArray[i].indexOf(elementToFilter) === -1){
            filteredArray.push(nestedArray[i]);
        }
    }
    return filteredArray;
}
console.log(filterArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));