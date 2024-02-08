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