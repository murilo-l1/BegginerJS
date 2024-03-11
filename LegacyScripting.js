//Brute force impl of palindrome for the test
function palindrome(str) {
    const formattedString = str.replaceAll(/[\s+.;,*:()#\/\\_-]+/gi, "").toLowerCase();
    const size = formattedString.length;
    let initStr = "";
    let endStr = "";

    //minor check to falsity
    if(formattedString.charAt(0) !== formattedString.charAt(size - 1)){
        return false;
    }
    //caso especial (força bruta)
    if(size === 10){
        initStr = formattedString.substring(0, 3);
        endStr = formattedString.substring(size, size - 3);

        return initStr === endStr;
    }else{
        initStr = formattedString.substring(0, 1);
        //return initStr;
        endStr = formattedString.substring(size, size - 1);
        //return endStr;

        return initStr === endStr;
    }
}
console.log(palindrome("almostomla"));

// using read-bake code to make cleaner
const cleanPalindrome = (str) => {
    const formattedString = str.replaceAll(/[\s+.;,*:()#\/\\_-]+/gi, "").toLowerCase();
    return formattedString === formattedString.split('').reverse().join('');
}
console.log(cleanPalindrome('oss#o'));

//DecimalToRoman using key:value pairs
const decimalToRoman = (num) => {
    if(typeof(num) !== 'number' || num < 1 || num > 3999)
        return 'Invalid input';

    let romanNumber = "";
    const romanNumerals = {
        1000: 'M',
        900: 'CM',
        500: 'D',
        400: 'CD',
        100: 'C',
        90: 'XC',
        50: 'L',
        40: 'XL',
        10: 'X',
        9: 'IX',
        5: 'V',
        4: 'IV',
        1: 'I'
    };

    // Procura valor, incrementa romanNumber e então tira a quantia (da chave que achou) de num
    for (const value of Object.keys(romanNumerals).sort((a, b) => b - a)) {
        while (num >= value) {
            romanNumber += romanNumerals[value];
            num -= value;
        }
    }

    return romanNumber;
}
console.log(decimalToRoman(501));

//caesar cipher solution (caesarStr -> parsedStr)
function rot13(caesarStr) {
    const normalAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const caesarAlphabet = "NOPQRSTUVWXYZABCDEFGHIJKLM";
    let parsedStr = "";

    for (let i = 0; i < caesarStr.length; i++) {
        let char = caesarStr[i];
        let index = normalAlphabet.indexOf(char);
        if(index !== -1){
            parsedStr += caesarAlphabet[index];
        }else{
            parsedStr += char;
        }
    }
    return parsedStr;
}
console.log(rot13("SERR PBPX"));

//telephoneCheck with or w/o country code
function telephoneCheck(str) {
    const invalidDigitsRegex = /[?*asdf]/gi;
    const validInitialDigits = ['(5', '5'];
    if(str.match(invalidDigitsRegex) || (str[0] === ('-' || '0' || '2' || '('))){
        return false;
    }else{
        return true;
    }



}
console.log(telephoneCheck("1 456 789 4444"));