function multiplyAll(arr, n){

    if(n <= 0){
        return 1;
    }
    return multiplyAll(arr, n - 1) * arr[n - 1];

}

function sumAll(arr, n){
    if(n <= 0){
        return 0;
    }
    return sumAll(arr, n - 1) + arr[n - 1];

}

function factorial(num){
    if(num <= 1){
        return 1;
    }
    return num * factorial(num - 1);
}

function countUp(n){
    if(n < 1){
        return [];
    }
    let countArray = countUp(n - 1);
    countArray.push(n);
    return countArray;
}

function countDown(n){
    if(n < 1){
        return [];
    }
    let countArray = countDown(n - 1);
    countArray.unshift(n);
    return countArray;
}

function rangeOfNumbers(startNum, endNum) {
    if(startNum > endNum){
        return [];
    }else {
        let arrNums = rangeOfNumbers(startNum + 1, endNum );
        arrNums.unshift(startNum);
        return arrNums;
    }
}

const arr = [1, 2, 10, 18, 10];
let n = arr.length;


console.log("Sum All:\n" + sumAll(arr, n) + "\nMultiply All:\n" + multiplyAll(arr, n) + "\nFatorial: " + factorial(n));

console.log("\nCount up: " + countUp(n) + "\nCount down: " + countDown(n));

console.log("\nRange of nums: " + rangeOfNumbers(-9, 9));