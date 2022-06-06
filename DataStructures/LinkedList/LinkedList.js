
export class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}


export class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    add(node){
        if(!this.head){
            this.head = node;
            this.tail = this.head;
            this.length++;
            return;
        }
        let iterator = this.head;
        while(iterator.next){
            iterator = iterator?.next
        }

        iterator.next = node;
        this.tail = iterator.next;
        this.length++;
    }

    remove(data){
        if(this.head.data === data){
            return this.head;
        }

        let iterator = this.head;
        let prevIterator;
        while( iterator.data !== data){
            prevIterator = iterator;
            iterator = iterator.next;
        }
        prevIterator.next = iterator.next;

    }
}