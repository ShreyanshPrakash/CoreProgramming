
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
        this.length--;
        return this.head;
    }

    itemAtIndex(index){
        if(index === 0 || index > this.length){
            return null;
        }

        if(index === 1){
            return this.head;
        }

        let count = 1;
        let iterator = this.head;
        while(count < index){
            iterator = iterator.next;
            count++;
        }

        return iterator;
    }

    removeAtIndex(index){
        if(index === 0 || index > this.length){
            return null;
        }

        if(index === 1){
            this.head = this.head.next;
            return this.head;
        }

        let count = 1;
        let iterator = this.head;
        let prevIterator = null;
        while(count < index){
            prevIterator = iterator;
            iterator = iterator.next;
            count++;
        }
        prevIterator.next = iterator.next;
        this.length--;
        return this.head;
    }

    addAtIndex(index, node){
        if( index < 0 || index >= this.length + 2){
            return null;
        }

        if(index === 1){
            node.next = this.head;
            this.head = node;
            return this.head;
        }

        let count = 1;
        let iterator = this.head;
        let prevIterator = null;
        while(count < index){
            prevIterator = iterator;
            iterator = iterator.next;
            count++;
        }
        prevIterator.next = node;
        node.next = iterator.next;
        return this.head;
    }
}