


export class Stack{
    constructor(){
        this.stack  = [];
    }

    add(item) {
        this.stack.push(item);
        return {
            stack: this.getStack(),
        }
    }

    pop(){
        const popedItem = this.stack.pop();
        return {
            popedItem,
            stack: this.getStack(),
        }
    }

    getStack(){
        return this.stack;
    }
}
