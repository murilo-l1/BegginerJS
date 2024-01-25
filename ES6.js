//ArrowFuncs
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([90, 10], [2, 10]));

//...args, generaliza os parâmetros
const sumAll = (...args) => {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum = sum + args[i];
    }
    return sum;
}
console.log(sumAll(10, 80, -10));

//Destructuring examples
const LOCAL_FORECAST = {
    yesterday: {low: 61, high: 75},
    today: {low: 64, high: 77},
    tomorrow: {low: 68, high: 80}
};

const {today: {low: lowToday}} = LOCAL_FORECAST;
const {today: {high: highToday}} = LOCAL_FORECAST;

//Robust strings

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};

function makeList(arr) {

    const failureItems = [];
    for (let i = 0; i < arr.length; i++) {
        failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    return failureItems;
}

console.log(makeList(result.skipped));

//ShortAnd Objects

const createPerson = (name, age, gender) => ({name, age, gender});
const resultObject = createPerson("Murilo", 20, 'Male');
console.log(resultObject);

//Classes - abstracting data
class Thermostat {
    constructor(tempF) {
        this._tempF = tempF;
    }

    get temperature() {
        return (5 / 9) * (this._tempF - 32);
    }

    set temperature(tempC) {
        this._tempF = (tempC * 9) / 5 + 32;
    }


}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;

//Script tags to easily export data between files

<html>
<body>
<script type="module" src="index.js"></script>
</body>
</html>