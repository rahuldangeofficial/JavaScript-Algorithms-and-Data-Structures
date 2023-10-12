class PriorityQueue {
    constructor() {
        this.data = [];
    }
    enqueue(element) {
        let index = this.data.length;
        for (let i = this.data.length - 1; i >= 0; i -= 1) {
            if (this.data[i].priority <= element.priority) {
                break;
            }
            index = i;
        }
        this.data.splice(index, 0, element);
    }

    dequeue() {
        return this.data.shift();
    }
    front() {
        return this.data[0];
    }
    back() {
        return this.data[this.data.length - 1];
    }
    length() {
        return this.data.length;
    }
    clear() {
        this.data = [];
    }
}

const queue1 = new PriorityQueue();
