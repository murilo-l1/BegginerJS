const hash = string => {
    let hashed = 0;
    for (let i = 0; i < string.length; i++) {
        hashed += string.charCodeAt(i);
    }
    return hashed;
};
const HashTable = function() {
    this.collection = {};

    this.add = function (key, value){
        const hashedKey = hash(key);
        this.collection[hashedKey] = this.collection[hashedKey] || {};
        this.collection[hashedKey][key] = value;
    }

    this.remove = function (key) {
        const hashedKey = hash(key);
        delete this.collection[hashedKey][key];
        if(Object.keys(this.collection[hashedKey]).length === 0){
            delete this.collection[hashedKey];
        }
    }

    this.lookup = function (key){
        const hashedKey = hash(key);
        return this.collection[hashedKey][key];
    }
};