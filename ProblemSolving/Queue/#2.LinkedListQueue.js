import { Node, LinkedListQueue } from './../../DataStructures/Queue/LinkedListQueue.js';

let queue = new LinkedListQueue();


[1,2,4,5,6,7,8].forEach(item => queue.enqueue(new Node(item)));

console.dir(queue.getHead(), {depth: null});

console.dir(queue.dequeue(), {depth: null});