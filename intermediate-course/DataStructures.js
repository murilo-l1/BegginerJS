// criando um array homogêneo que carrega até 16 elementos, cada um de até 4 bytes (32bits)
var buffer = new ArrayBuffer(64);
var i32View = new Int32Array(buffer);

// imitando o funcionamento de uma stack, considere 'PSY44' o topo da pilha
var homeworkStack = ["BIO12","HIS80","MAT122","PSY44"];
homeworkStack.pop();
homeworkStack.push('CS50');
//console.log(homeworkStack);

function Stack() {
    const collection = [];
    this.print = function() {
        console.log(collection);
    };
    this.push = function (element){
        collection.push(element);
    }
    this.pop = function (){
        const popped = collection.pop();
        return popped;
    }
    this.peek = function (){
        return collection[collection.length - 1];
    }
    this.isEmpty = function (){
        return collection.length === 0;
    }
    this.clear = function (){
        collection.length = 0;
    }
}

function Queue() {
    const collection = [];
    this.print = function() {
        console.log(collection);
    };
    this.enqueue = function (element){
        collection.unshift(element);
    }
    this.dequeue = function (){
        return collection.pop();
    }
    this.front = function (){
        return collection[collection.length - 1];
    }
    this.isEmpty = function (){
        return collection.length === 0;
    }
    this.size = function (){
        return collection.length;
    }
}

function PriorityQueue () {
    this.collection = [];
    this.printCollection = function() {
        console.log(this.collection);
    };
    this.enqueue = function (element){
        let index = this.collection.findIndex(item => element[1] < item[1]);
        console.log('index for the value: ' + index);
        if(index !== -1){
            this.collection.splice(index, 0, element);
        }
        else{
            this.collection.push(element);
        }
    }
    this.dequeue = function (){
        const removed = this.collection.unshift();
        return removed[0];
    }
    this.size = function (){
        return this.collection.length;
    }
    this.isEmpty = function (){
        return this.size() === 0;
    }
    this.front = function (){
        return this.collection[0][0];
    }
}

function testPriorityQueue() {
    const priorityQueue = new PriorityQueue();
    priorityQueue.enqueue(['p1', 1]);
    priorityQueue.enqueue(['p2', 0]);
    priorityQueue.enqueue(['p1', -1]);
    priorityQueue.enqueue(['p9', 9]);
    priorityQueue.enqueue(['mid', 5]);
    priorityQueue.dequeue();
    priorityQueue.printCollection();
}

// criando uma fila circular que consegue inserir ou remover elementos
class CircularQueue {
    constructor(size) {

        this.queue = [];
        this.read = 0;
        this.write = 0;
        this.max = size - 1;

        while (size > 0) {
            this.queue.push(null);
            size--;
        }
    }

    print() {
        return this.queue;
    }

    enqueue(item) {
        if(this.queue[this.write] == null){
            this.queue[this.write++] = item;
            if(this.write > this.max)
                this.write = 0;

            return item;
        }
        return null;
    }

    dequeue() {
        if(this.queue[this.read] != null){
            let item = this.queue[this.read];
            this.queue[this.read++] = null;

            if(this.read > this.max)
                this.read = 0;

            return item;
        }
        return null;
    }
}

function testCircularQueue(){
    const circularQueue = new CircularQueue(5);
    circularQueue.enqueue('a');
    console.log(circularQueue.print());
    circularQueue.enqueue('b');
    circularQueue.enqueue('c');
    circularQueue.enqueue('d');
    circularQueue.enqueue('e');
    circularQueue.dequeue();
    console.log(circularQueue.print());
}
//testCircularQueue();


// creating a Set from scratch to know how the operations in ES6 occurs
class Set {
    constructor() {
        this.dictionary = {};
        this.length = 0;
    }

    has(element) {
        return this.dictionary[element] !== undefined;
    }

    values() {
        //console.log(this.dictionary);
        return Object.values(this.dictionary);
    }

    add(element){
        if(this.has(element) == false){
            this.dictionary[element] = element;
            this.length++;
            return true;
        }
        return false;
    }

    remove(element){
        if(this.has(element) == true){
            delete this.dictionary[element];
            this.length--;
            return true;
        }
        return false;
    }

    size(){
        return this.length;
    }

    union(anotherSet){
        const unionSet = new Set();

        const addToSet = element => unionSet.add(element);

        this.values().forEach(addToSet);
        anotherSet.values().forEach(addToSet);

        return unionSet;
    }

    intersection(anotherSet){
        const intersectedSet = new Set();

        for (const thisValue of this.values()) {
            if(this.has(thisValue) && anotherSet.has(thisValue)){
                intersectedSet.add(thisValue);
            }
        }

        for (const anotherValue of anotherSet.values()) {
            if(this.has(anotherValue) && anotherSet.has(anotherValue)){
                intersectedSet.add(anotherValue);
            }
        }

        return intersectedSet;
    }

    difference(anotherSet){
        const differenceSet = new Set();

        for (const thisValue of this.values()) {
            if(this.has(thisValue) && !(anotherSet.has(thisValue))){
                differenceSet.add(thisValue);
            }
        }

        return differenceSet;
    }

    isSubsetOf(anotherSet){
        return this.values().every(value => anotherSet.has(value));
    }

}

function testSet() {

    const setA = new Set();

    // Add elements to the set
    setA.add(1);
    setA.add(2);
    setA.add(3);
    setA.add(4);
    setA.add(5);

    // Log the values of the set
    console.log("Values of setA:", setA.values());

    // Check if setA has 3
    console.log("Does setA contain 3?", setA.has(3)); // Should return true

    // Remove an element from the set
    setA.remove(2);

    // Log the size of the set
    console.log("Size of setA after removing an element:", setA.size());

    // Create another set
    const setB = new Set();
    setB.add(4);
    setB.add(5);
    setB.add(6);
    setB.add(7);

    // Find the union of setA and setB
    const unionAB = setA.union(setB);
    console.log("Union of setA and setB:", unionAB.values());

    // Find the intersection of setA and setB
    const intersectionAB = setA.intersection(setB);
    console.log("Intersection of setA and setB:", intersectionAB.values());

    // Find the difference between setA and setB
    const differenceAB = setA.difference(setB);
    console.log("Difference between setA and setB:", differenceAB.values());

    console.log("SetA is subSet of B ? " + setA.isSubsetOf(setB));

}
testSet();

// using the native ES6 Set class
function checkSet(arrToBeSet, checkValue){
    const set = new Set(arrToBeSet);
    if(set.has(checkValue)){
        return [true, set.size];
    }
    else{
        return [false, set.size];
    }
}
function spreadOperator(set){
    return [...set];
}

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

let called = 0;
const hash = string => {
    called++;
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

const Node = function(element) {
    this.element = element;
    this.next = null;
};
const Kitten = new Node('Kitten');
const Puppy = new Node('Puppy');

Kitten.next = Puppy;
const Dog = new Node('Dog');
const Cat = new Node('Cat');
Puppy.next = Cat;
Cat.next = Dog;

function LinkedList() {
    var length = 0;
    var head = null;

    const Node = function(element){
        this.element = element;
        this.next = null;
    };

    this.head = function(){
        return head;
    };

    this.size = function(){
        return length;
    };

    this.add = function(element){
        const newNode = new Node(element);
        if(head != null) {
            let current = head;
            while(current.next != null){
                current = current.next;
            }
            current.next = newNode;
        }
        else{
            head = newNode;
        }
        length++;
    };

    this.remove = function(element){
        // assim n perde referencia do prox e remove ele
        if(head.element === element){
            head = head.next;
            length--;
            return length;
        }
        let previous = head;
        // previous vai percorrer a lista enquanto nao achar null ou o elemento que é pra ser removido
        while(previous){
            let current = previous.next;
            if(current){
                if(current.element === element){
                    previous.next = current.next;
                    return length--;
                }
            }
            previous = current;
        }
    };

    this.isEmpty = () => {
        if(head == null) return true;

        let count = 0;
        let temp = head;
        while(temp.next != null){
            count++;
            temp = temp.next;
        }
        return count === 0;
    }

}