import { Node, LinkedList } from './../../DataStructures/LinkedList/LinkedList.js';



let linkedList = new LinkedList();

[1,2,3,4,5,6,7].forEach(item => linkedList.add(new Node(item)));

let result = linkedList.itemAtIndex(1);
console.dir(result, {depth: null});

result = linkedList.removeAtIndex(3);
console.dir(result, {depth: null});

result = linkedList.remove(5);
console.dir(result, {depth:  null});

result = linkedList.addAtIndex(2, new Node(20));
console.dir(result, {depth: null});

