//.shift() e .pop() examples
const popShift = (arr) => {
    let shifted = arr.shift(); //get first element
    let popped = arr.pop(); // get last element
    return [shifted, popped];
}
console.log(popShift(['challenge', 'is', 'not', 'complete']));

//.splice() example - removing certain elements
const changeHtmlColours = (colors) =>{
    const startIndex = 0;
    const numberOfRemoved = 2;
    colors.splice(startIndex, numberOfRemoved, 'DarkSalmon', 'BlanchedAlmond');
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

