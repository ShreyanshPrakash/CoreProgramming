import { Stack } from './../../DataStructures/Stacks/Stacks.js';

const stack = new Stack();


[2,4,5,6,7,8].forEach(item => stack.add(item));
let result = stack.getStack();


console.log(result);

result = stack.pop();
console.log(result);
