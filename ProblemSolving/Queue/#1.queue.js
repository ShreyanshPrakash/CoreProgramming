import { Queue } from './../../DataStructures/Queue/Queue.js';


const queue = new Queue();
let result = queue.getQueue();
console.log(result);

[1,3,9,3,6].forEach(item => queue.enqueue(item));
result = queue.getQueue();
console.log(result);

result = queue.dequeue();
console.log(result);