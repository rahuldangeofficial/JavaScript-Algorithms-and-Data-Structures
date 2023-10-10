class Stack {
    constructor() {
        this.data = [];
    }
    push(element) {
        this.data.push(element);
    }
    pop() {
        return this.data.pop();
    }
    top() {
        return this.data[this.data.length - 1];
    }
    length() {
        return this.data.length;
    }
    clear() {
        this.data = [];
    }
}

const stack1 = new Stack();
