import { Node, LinkedListStack } from './../../DataStructures/Stacks/LinkedListStack.js';

let linkedListStack = new LinkedListStack();
[1,2,3,4,5,6].forEach(item => linkedListStack.push(new Node(item)));

console.dir(linkedListStack.getHead(), {depth: null});

console.dir(linkedListStack.pop(), {depth: null});