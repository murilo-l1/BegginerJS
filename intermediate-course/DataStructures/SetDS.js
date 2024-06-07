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