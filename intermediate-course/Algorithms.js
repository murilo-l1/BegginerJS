//obtain the symmetric difference between a set of arrays
function sym(...args) {
    // function to obtain the difference of a pair of arrays
    const diffArrays = (arr1, arr2) => {
        const filterFunc = (arr1, arr2) => {
            return arr1.filter(item => arr2.indexOf(item) === -1);
        }
        return filterFunc(arr1, arr2).concat(filterFunc(arr2, arr1));
    }
    let result = args[0];
    // iterating through all arrays in args and comparing the set formed in each step
    for(let i = 1; i < args.length; i++){
        result = diffArrays(result, args[i]);
    }
    // filtering duplicates
    return result.filter((value, index, self) => self.indexOf(value) === index);
}
console.log(sym([1, 2, 5], [2, 3, 5], [2,2,2]));


function updateInventory(arr1, arr2) {
    if(arr1.length === 0){
        return sortInventoryByNames(arr2);
    }
    else if(arr2.length === 0){
        return sortInventoryByNames(arr1);
    }

    const currItemsNames = getItemsNames(arr1);
    const leftItems = [];

    for (let i = 0; i < arr1.length; i++) {

        if(currItemsNames.indexOf(arr2[i][1]) === -1){
            leftItems.push(arr2[i]);
        }
        else{
            const index = currItemsNames.indexOf(arr2[i][1]);
            const newQuantity = arr2[i][0];
            const currQuantity = arr1[index][0];
            arr1[index][0] = newQuantity + currQuantity;
        }
    }

    leftItems.forEach(item => arr1.push(item));

    return sortInventoryByNames(arr1);
}

function sortInventoryByNames(inventory) {
    // Sort the inventory array alphabetically by the second element (item name)
    inventory.sort((a, b) => {
        const nameA = a[1].toLowerCase();
        const nameB = b[1].toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    });
    return inventory;
}
const getItemsNames = (arr) =>
{
    const itemsNames = [];
    for(let i = 0; i < arr.length; i++){
        let name = arr[i][1];
        itemsNames.push(name);
    }

    return itemsNames;
}

// Example inventory lists
const curInv = [
    // qtd, product
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"],
];

const newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];
console.log(updateInventory(curInv, newInv));

function swap(x, y, arr) {
    let tmp = arr[x];
    arr[x] = arr[y];
    arr[y] = tmp;
}

function heapPermut(inputString) {
    const arr = inputString.split(''); // divide a string em chars
    const result = [];

    const generate = (n, arr) => {
        // caso base, se n == 1, junta os elementos e os insere;
        if(n === 1){
            result.push(arr.join(''));
            return;
        }
        for(let i = 0; i < n; i++){
            generate(n - 1, arr);
            // se n é par, troca i pelo ultimo elemento
            if(n % 2 === 0){
                swap(i, n - 1, arr);
            }
            // se é impar troca o primeiro pelo último
            else{
                swap(0, n - 1, arr);
            }
        }
    }

    generate(arr.length, arr);
    return result;
}

// dada todas permutacoes de uma str retornar quantas delas nao repetem caracters
function permAlone(str) {
    if (str.length <= 1) {
        return 1;
    }
    const permutations = heapPermut(str); // chama o algoritmo de heap para obter as permuatacoes possiveis
    const duplicatesRgx = /(.)\1+/; // um elemento qualquer ((.)) e verifica se ele aparece mais e uma vez
    const filtered = permutations.filter((str) => !(str.match(duplicatesRgx)));
    return filtered.length;
}
console.log(permAlone('aab'));

function binarySearch(searchList, value) {
    const arrayPath = [];

    let left = 0;
    let right = searchList.length - 1;
    let middle = Math.floor(right / 2);

    while(searchList[middle] !== value){
        arrayPath.push(searchList[middle]);

        if(left >= right){
            // se os ponteiros se cruzaram percorremos all array e não encontramos
            return 'Value Not found';
        }

        if(searchList[middle] > value){
            right = middle - 1;
            middle = left + Math.floor((right - left) / 2);
        } else{
            left = middle + 1;
            middle = left + Math.floor((right - left) / 2);
        }


    }
    arrayPath.push(searchList[middle]);

    return arrayPath;
}
const testArray = [
    0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 49, 70
];
console.log(binarySearch(testArray, 6));

// encontrar o par no array que somados geram o arg e retornar a soma de seus indices
function pairwise(arr, arg){
    if(arr === []){
        return 0;
    }
    let output = 0;
    const usedDictionary = arr.reduce((acc, _, i) => ({
            ...acc,
            [i]: false
    }), {});

    //console.log(usedDictionary);
    for (let i = 0; i < arr.length - 1; i++) {
        if(usedDictionary[i]){
            continue;
        }
        for (let j = i + 1; j < arr.length ; j++) {
            if(usedDictionary[j]){
                continue;
            }
            if(arr[i] + arr[j] === arg){
                usedDictionary[i] = true;
                usedDictionary[j] = true;
                output += (i + j);
                break;
            }
        }
    }
    return output;
}
console.log(pairwise([1, 4, 2, 3, 0, 5], 7));

// revisar o erro de caso que o leetcode propoe
const restoreString = function(s, indices) {
    let generatedStr = '';
    for (let i = 0; i < indices.length; i++) {
        let currentIndex = indices[i];
        //console.log(currentIndex);
        generatedStr = generatedStr + s[currentIndex];
        //console.log(generatedStr);
    }
    
    return generatedStr;
    
};
console.log(restoreString("cbad", [2,1,0,3]));
//c o d e l e e t
//4,5,6,7,0,2,1,3