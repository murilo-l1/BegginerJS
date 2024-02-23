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