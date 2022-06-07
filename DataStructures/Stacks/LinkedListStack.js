
export class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

export class LinkedListStack{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    getHead(){
        return this.head;
    }

    getTail(){
        return this.tail;
    }


    push(node){
        if(!this.head){
            this.head = node;
            this.tail = this.head;
            return this.head;
        }

        let iterator = this.head;
        while(iterator.next){
            iterator = iterator.next;
        }

        iterator.next = node;
        this.tail = node;
        this.size++;
        return this.head;
    }

    pop(){
        if(!this.head){
            return this.head;
        }

        let iterator = this.head;
        while(iterator.next.next){
            iterator = iterator.next;
        }
        iterator.next = null;
        this.tail = iterator;
        this.size--;
        return this.head;

    }
}