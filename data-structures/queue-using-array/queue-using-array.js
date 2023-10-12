class Queue {
    constructor() {
      this.data = [];
    }
    enqueue(element) {
      this.data.push(element);
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
  
  const queue1 = new Queue();