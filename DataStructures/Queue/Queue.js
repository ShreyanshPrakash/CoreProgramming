

export class Queue{
    constructor(){
        this.queue = [];
    }

    enqueue(item){
        this.queue.push(item);
        return {
            queue: this.queue,
        }
    }

    dequeue(){
        const dequeuedItem = this.queue.shift();
        return {
            dequeuedItem,
            queue: this.queue,
        }
    }

    getQueue(){
        return this.queue;
    }
}