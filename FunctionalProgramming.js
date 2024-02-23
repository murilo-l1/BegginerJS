//avoid mutations and make explicit what is going to be used (params)
function incrementer(fixedValue) {
    return fixedValue + 1;
}

const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];
function add(arr, bookName) {
    let newBookList = [...arr];
    newBookList.push(bookName);
    return newBookList;
}
function remove(arr, bookName) {
    let newBookList = [...arr];
    const book_index = arr.indexOf(bookName);
    if (book_index >= 0) {

        newBookList.splice(book_index, 1);
        return newBookList;
    }
}
console.log(remove(bookList,"On The Electrodynamics of Moving Bodies"))

const watchList = [
    {
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "18 Jul 2008",
        "Runtime": "152 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        "Language": "English, Mandarin",
        "Country": "USA, UK",
        "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        "Metascore": "82",
        "imdbRating": "9.0",
        "imdbVotes": "1,652,832",
        "imdbID": "tt0468569",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        "Language": "English, Urdu, Mandarin",
        "Country": "USA, UK",
        "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
        "Metascore": "70",
        "imdbRating": "8.3",
        "imdbVotes": "972,584",
        "imdbID": "tt0372784",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA, UK",
        "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        "Metascore": "83",
        "imdbRating": "7.9",
        "imdbVotes": "876,575",
        "imdbID": "tt0499549",
        "Type": "movie",
        "Response": "True"
    }
];
//.map() example to iterate in a object and dont mutate it
const ratings = watchList.map(movie =>
    ({title: movie["Title"],
        rating: movie["imdbRating"]}));

console.log(JSON.stringify(ratings));

//.myMap() to understand how .map() works - "do the callback in each element and return a newly array with the returns"
Array.prototype.myMap = function(callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this));
    }
    return newArray;
};
console.log([1, 1, 2, 5, 2].myMap((element, index, array) => array[index + 1] || array[0]));

//.filter() example to easily filter an array given a condition
const filteredList = ratings.filter(movie => movie.rating >= 8.0);
console.log(filteredList);

//.myFilter() implementation to understand that for each element it have to pass the callback condition
Array.prototype.myFilter = function(callback) {
    const filteredArray = [];
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)){
            filteredArray.push(this[i]);
        }
    }
    return filteredArray;
};
console.log([1, 1, 2, 5, 2].myFilter((element, index, array) => array.indexOf(element) === index));

//.splice() changes the original array breaking principles of functional programming, instead we will use slice that creates a copy and returns that COPY instead of mutating
const nonMutatingSplice = (cities) => cities.slice(0,3)
console.log(nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"])); //turned into a 3 elements array with just a copy of the original one

//.reduce() example
const getRating = (watchList) => {

    let totalRating = 0;

    const nolanMovies = watchList.filter(movie => movie["Director"] === "Christopher Nolan");

    const getTitleAndRating = nolanMovies.map(movie => ({title: movie["Title"], rating: movie["imdbRating"]}));

    if(getTitleAndRating.length > 0){
        totalRating = getTitleAndRating.reduce((accumulator, movie) => {
            return accumulator + Number.parseFloat(movie.rating);
        }, 0);
        const averageRating = totalRating/ getTitleAndRating.length;
        return averageRating;
    }else{
        return 0;
    }
}
console.log(getRating(watchList));

const squareList = arr => {

    const getPositivesInt = arr.filter(num => num > 0 && Number.isInteger(num) === true);
    const squareNums = getPositivesInt.map((num) => Math.pow(num, 2));

    return squareNums;

};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

//.sort() examples
const alphabeticalOrder = (arr) => {
    return arr.sort();
}
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));

const nonMutatingSort = (arr) => {
    let copyArr = arr.slice();
    return copyArr.sort((a, b) => a - b); //ordem ascendente
}
console.log(nonMutatingSort( [5, 6, 3, 2, 9]));