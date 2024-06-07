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

// simple node creation and test
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

// creating a linkedListObj that can resolve some methods
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
        return head == null;
    };

    this.indexOf = (element) => {
        if(head == null){
            return -1;
        }
        let index = 0;
        let current = head;
        while(current != null){
            if(current.element == element){
                return index;
            }
            current = current.next;
            index++;
        }
        return -1;
    };

    this.elementAt = (index) => {
        if(index < 0){
            return undefined;
        }
        let current = head;
        let count = 0;
        while(current != null){
            if(index === count){
                return current.element;
            }
            current = current.next;
            count++;
        }
        return undefined;
    };

    this.removeAt = (index) => {
        if (index < 0 || index >= length) {
            return null;
        }

        let current = head;
        let previous = null;
        let removedElement = null;

        if (index === 0) {
            removedElement = head.element;
            head = current.next;
        } else {
            let count = 0;
            while (count < index) {
                previous = current;
                current = current.next;
                count++;
            }
            removedElement = current.element;
            previous.next = current.next;
        }

        length--;
        return removedElement;
    };

    this.addAt = (index, element) => {
        if(index < 0 || index > length){
            return false;
        }
        const node = new Node(element);

        if(index === 0){
            node.next = head;
            head = node;
            return length++;
        }

        let count = 0;
        let current = head;
        while(current != null){
            if(index === count){
                break;
            }
            current = current.next;
            count++;
        }
        current = node;
        return length++;
    }

    this.print = () =>{
        let current = head;
        while(current != null){
            console.log(`${current.element} -> `);
            current = current.next;
        }
        console.log('null');
    }
}

const testList = new LinkedList();
testList.add(1);
testList.add(2);
testList.add(3);
console.log(testList.addAt(0, 2));
//testList.print()

const DNode = function(data, prev) {
    this.data = data;
    this.prev = prev;
    this.next = null;
};
const DoublyLinkedList = function() {
    this.head = null;
    this.tail = null;

    this.add = (data) =>{
        const node = new DNode(data, null);

        if(this.head == null){
            this.head = node;
        }
        else{
            let current = this.head;
            while(current.next != null){
                current = current.next;
            }


        }

    }


};