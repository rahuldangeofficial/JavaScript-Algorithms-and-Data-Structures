class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
    }
    push(element) {
        let node = new Node(element);

        if (this.bottom === null) {
            this.bottom = node;
        }
        if (this.top === null) {
            this.top = node;
        }

        node.next = this.top;
        this.top = node;
        return true;
    }
    pop() {
        if (this.top === null) {
            return false;
        }
        if (this.top === this.bottom) {
            this.top = null;
            this.bottom = null;
        }
        let temp = this.top.data;
        this.top = this.top.next;
        return temp;
    }
    peek() {
        return this.top.data;
    }
    length() {
        let pointer = this.top;
        let count = 0;
        while (pointer !== null) {
            count += 1;
            pointer = pointer.next;
        }
        return count;
    }
    clear() {
        this.top = null;
        this.bottom = null;
    }
}

const stack1 = new Stack();
