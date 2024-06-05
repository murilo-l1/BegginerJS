function swap(x, y, arr) {
    let tmp = arr[x];
    arr[x] = arr[y];
    arr[y] = tmp;
}

// comparar com o elemento da frente e troca - los se for menor
function bubbleSort(array) {
    const size = array.length;

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size - 1 - i; j++) {
            if(array[j] > array[j + 1]){
                swap(j, j + 1, array);
            }
        }
    }
    return array;
}
console.log(bubbleSort([8, -2, 90, 10]));

// separa o vetor em parcela ordenada e não ordenada, 'min' é um indice que vai selecionar o menor elemento na parcela não ordenada, troque esse elemento então com o atual (arr[i])
function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            if(array[min] > array[j]){
                min = j;
            }
        }
        //console.log("antes: " + array.toString());
        swap(i, min, array);
        //console.log("depois: " + array.toString());
    }

    return array;
}
console.log(selectionSort([2, 1, 10, 7]));

// aqui a ideia é salvar o current, j verifica toda parcela ordenada, se um elemento da parcela ordenada for maior que o da parcela não ordenada (vista por i),
// "empurra" os ordenados para frente e insere na posição que ficou "vazia" o elemento selecionada da parcela de i;
function insertionSort(array){
    for (let i = 1; i < array.length; i++) {
        let j = i;
        while(j > 0 && array[j - 1] > array[j]){
            swap(j, j - 1, array);
            j--;
        }
    }
    return array;
}
console.log("Atual: " + insertionSort([8, 7, 2, 1, 4]));

function pivot(arr, left = 0, right = arr.length - 1){
    let shift = left;
    for (let i = left + 1; i <= right; i++) {
        if (arr[i] < arr[left])
            swap(i, ++shift, arr);
    }
    swap(left, shift, arr);
    return shift;
}

function quickSort(array, left = 0, right = array.length - 1){
    if(left < right){
        let pivotIndex = pivot(array, left, right);
        quickSort(array, left, pivotIndex - 1);
        quickSort(array, pivotIndex + 1, right);
    }
    return array;
}
console.log(quickSort([4, 2, 9, 7, 8]));

// faz a divisão e conquista e chama a merge para resolver as parcelas criadas, 'juntando - as' no array original
function mergeSort(array){
    if(array.length <= 1){
        return;
    }
    const middle = Math.floor(array.length / 2);
    const leftArray = [];
    const rightArray = [];

    for (let i = 0; i < array.length; i++) {
        if(i < middle){
            leftArray.push(array[i]);
        }
        else{
            rightArray.push(array[i]);
        }
    }
    mergeSort(leftArray);
    mergeSort(rightArray);
    merge(leftArray, rightArray, array);

    if(array.length % 2 === 0){
        return array;
    }
    else{
        const indexOfUndefined = array.indexOf(undefined); // strange bug, dealing w this dirty way for now
        return array.slice(0, indexOfUndefined);
    }
}

function merge(leftArray, rightArray, array){

    const leftSize = array.length / 2;
    const rightSize = array.length - leftSize;

    let i = 0, l = 0, r = 0;


    while(l < leftSize && r < rightSize){
        if(leftArray[l] < rightArray[r]){
            array[i] = leftArray[l];
            i++;
            l++;
        }
        else{
            array[i] = rightArray[r];
            i++;
            r++;
        }
    }
    while(l < leftSize){
        array[i] = leftArray[l];
        i++;
        l++;
    }
    while(r < rightSize){
        array[i] = rightArray[r];
        i++;
        r++;
    }
}
console.log(mergeSort([6, 2, 1, 10]));