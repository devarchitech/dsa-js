class Node {

    constructor(value){

        this.value = value;
        this.next = null;
    }
}

class LinkedList {

    constructor(value) {

        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    //add node at the end
    push(value) {

        let node = new Node(value);

        if(!this.head){
            
            this.head = node;
            this.tail = node; 
            this.length = 1;
        }
        else {
            this.tail.next = node;
            this.tail = node;
            this.length++;
        }
        
    }

    //remove last node
    pop() {

        if (!this.head){
            return undefined;
        }

        let temp = this.head;
        let prev = this.head;

        while(temp.next != null) {
            prev = temp;
            temp = prev.next
        }

        this.tail = prev;
        this.tail.next = null;
        this.length--;
    }

    //add node at the head
    unshift(value) {

        const newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            newNode.next = null;
        }

        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    //remove first element
    shift(){

        if(!this.head){
            return undefined;
        }

        const temp = this.head;
        this.head = temp.next;
        temp.next = null;
        this.length--;

        if(this.length === 0){ 
            this.tail = null;
        }
    }

    getFirstNode(){
        return this.head;
    }

    getLastNode(){
        return this.tail;
    }

    //get node at particular index. index starts from 0
    get(index){

        if(!this.head){
            return undefined;
        }

        let temp = this.head;
        let counter = 0; 
        while(temp){
            
            if(counter === index){
                return temp;
            }
            else{
                counter++;
                temp = temp.next;
            }

        }
    }

    //update node value at specific index.
    set(value, index){

        let temp = this.get(index);

        if(temp){
            
            temp.value = value;
            return true;
        }
    }

    //insert node at specific index.
    insert(value, index){

        if(index === 0){
            this.unshift(value);
        }

        if(index === this.length){
            this.push(value);
        }

        const newNode = new Node(value);
        const temp = this.get(index-1);
        
        if(temp)
        {
            newNode.next = temp.next;
            temp.next = newNode;
            this.length++;

            return true;
        }
    }
  
    clear(){
        this.head = null;
    }
}

let myLinkedList = new LinkedList("1st Node");
myLinkedList.push("2nd Node");
myLinkedList.push("3rd Node");
myLinkedList.push("4th Node");
myLinkedList.pop();
myLinkedList.unshift("0th node");
myLinkedList.shift();

myLinkedList.set("new insert", 2);
console.log(myLinkedList);