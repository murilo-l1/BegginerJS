// map is a data structure that stores {key: value} pairs, here is a personal implementation before using the ES6 version:
const Map = function() {
    this.collection = {};

    this.add = function (key, value) {
        this.collection[key] = value;
    }

    this.remove = function (key){
        delete this.collection[key];
    }

    this.get = function (key){
        if(this.has(key)){
            return this.collection[key];
        }
        else{
            return undefined;
        }
    }

    this.has = function (key){
        return this.collection.hasOwnProperty(key);
    }

    this.values = function (){
        return [...Object.values(this.collection)];
    }

    this.size = function (){
        return Object.entries(this.collection).length;
    }

    this.clear = function (){
        this.collection = {};
    }
};

function testMap(){

    const myMap = new Map();
    myMap.add('name', 'Murilo');
    myMap.add('age', 20);
    myMap.add('city', 'PG');
    console.log('Age ? ' + myMap.has('age'));
    console.log(myMap.get('name'));
    myMap.clear();
    console.log(myMap.values());
    console.log(myMap.has('name'));
}
testMap();