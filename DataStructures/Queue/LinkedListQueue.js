
export class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}


export class LinkedListQueue{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    getHead(){
        return this.head;
    }


    enqueue(node){
        if(!this.head){
            this.head = node;
            this.tail = node;
            this.size++;
            return this.getHead();
        }

        let iterator = this.head;
        while(iterator.next){
            iterator = iterator.next;
        }
        iterator.next = node;
        this.tail = node;
        this.size++;
        return this.getHead();
    }

    dequeue(){
        if(!this.head){
            return this.getHead();
        }

        this.head = this.head.next;
        return this.getHead();

    }
}