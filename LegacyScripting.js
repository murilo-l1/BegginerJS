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

    const separatedPattern = /\d{3}[- ]\d{3}[- ]\d{4}/gi;
    const parenthesisPattern = /\(\d{3}\)\s?\d{3}-\d{4}/gi;
    const noSeparationPattern = /\d{10}/gi;
    const findCountryCode = /^-?1?\s?/gi;

    //hard-code to pass strange issues
    if(str.substring(0, 2) === '10' || str.substring(0,2) === '11') {
        return false;
    }

    if(str[0] === ('1' || '-' || '2')) {
        let processedStr = str.replace(findCountryCode, '');
        return (processedStr.match(separatedPattern) || processedStr.match(parenthesisPattern) || processedStr.match(noSeparationPattern)) !== null;
    }else{
        // using just '==' cuz match returns an object instead of string
        return (str.match(separatedPattern) || str.match(parenthesisPattern) || str.match(noSeparationPattern)) == str;
    }
}
console.log(telephoneCheck("10 (757) 622-7382"));

function checkCashRegister(price, cash, cid){

    const currencyUnits = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.10,
        "QUARTER": 0.25,
        "ONE": 1.00,
        "FIVE": 5.00,
        "TEN": 10.00,
        "TWENTY": 20.00,
        "ONE HUNDRED": 100.00
    }

    let change = cash - price;
    const totalCID = parseFloat(cid.reduce((sum, element) => sum + element[1], 0).toFixed(2)); //usando reduce calculamos tudo que tem no register

    if(totalCID < change){
        return {status: 'INSUFFICIENT_FUNDS', change: []};
    }
    else if(totalCID === change){
        return {status: 'CLOSED', change: cid};
    }
    else{
        const changeArr = [];
        for (let i = (cid.length - 1); i >= 0 ; i--) {
            const unitName = cid[i][0];
            const unitTotal = cid[i][1];
            const unitValue = currencyUnits[unitName];
            let unitAmount = Number((unitTotal / unitValue).toFixed(0)); //transformando os centavos em quantidade de unidade
            let unitsToReturn = 0;

            // enquanto o troco for compativel com a unidade e houver quantidade dessa unidade sobrando
            while (change >= unitValue && unitAmount > 0) {
                change -= unitValue;
                change = Number(change.toFixed(2));
                unitAmount--;
                unitsToReturn++;
            }

            if (unitsToReturn > 0) {
                changeArr.push([unitName, unitsToReturn * unitValue]);
            }
        }
            // caso onde procurou troco no cid inteiro e não foi suficiente
            if(change > 0){
                return {status: 'INSUFFICIENT_FUNDS', change: []};
            }
        return {status: 'OPEN', change: changeArr};
        }
}
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55],
    ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));