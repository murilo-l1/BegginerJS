function reverseString(str){
    const size = str.length;
    let reversedString = "";

    for(let i = size - 1; i >= 0; i--){
        reversedString = reversedString + str.charAt(i);
    }
    return reversedString;
}

console.log(reverseString("murilo"));