class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  findIndex(element) {
    let index = 0;
    let pointer = this.head;
    while (pointer !== null) {
      if (pointer.data === element) {
        return index;
      }
      pointer = pointer.next;
      index += 1;
    }
    return -1;
  }

  findElement(index) {
    let currentIndex = 0;
    let pointer = this.head;
    while (pointer !== null) {
      if (currentIndex === index) {
        return pointer.data;
      }
      currentIndex += 1;
      pointer = pointer.next;
    }
    return undefined;
  }

  findPreviousNodeByElement(element) {
    if (this.head === null) {
      return null;
    }

    let pointer = this.head;
    while (pointer.next !== null) {
      if (pointer.next.data === element) {
        return pointer;
      }
      pointer = pointer.next;
    }

    return null;
  }

  findPreviousNodeByIndex(index) {
    if (this.head === null) {
      return null;
    }

    let currentIndex = 0;
    let pointer = this.head;
    while (pointer.next !== null) {
      if (currentIndex === index - 1) {
        return pointer;
      }
      currentIndex += 1;
      pointer = pointer.next;
    }

    return null;
  }

  length() {
    if (this.head === null) {
      return 0;
    } else {
      return 1 + this.head.next.length();
    }
  }

  print() {
    let pointer = this.head;
    while (pointer !== null) {
      console.log(pointer.data);
      pointer = pointer.next;
    }
  }

  insertAtHead(data) {
    let node = new Node(data);
    node.next = this.head;

    this.head = node;
    if (this.tail === null) {
      this.tail = this.head;
    }
  }

  insertAtTail(data) {
    if (this.head === null) {
      this.insertAtHead(data);
      return;
    }

    let node = new Node(data);
    this.tail.next = node;
    this.tail = node;
  }

  insertAtIndex(index, data) {
    if (index < 0 || index > this.length()) {
      throw new Error("Invalid index");
    }

    if (index === 0) {
      this.insertAtHead(data);
      return;
    }

    if (index === this.length()) {
      this.insertAtTail(data);
      return;
    }

    let node = new Node(data);
    let previousNode = this.findPreviousNodeByIndex(index);
    node.next = previousNode.next;
    previousNode.next = node;
  }

  deleteAtHead() {
    if (this.head === null) {
      throw new Error("Linked list is empty");
    }

    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    }
  }

  deleteAtTail() {
    if (this.head === null) {
      throw new Error("Linked list is empty");
    }

    if (this.head.next === null) {
      this.head = null;
      this.tail = null;
      return;
    }

    let previousNode = this.findPreviousNodeByElement(this.tail.data);
    this.tail = previousNode;
    previousNode.next = null;
  }

  deleteAtIndex(index) {
    if (index < 0 || index >= this.length()) {
      throw new Error('Invalid index');
    }
  
    let pointer = this.head;
    let previousNode = null;
    for (let i = 0; i < index; i++) {
      previousNode = pointer;
      pointer = pointer.next;
    }
  
    if (pointer === this.head) {
      this.head = pointer.next;
    } else if (pointer === this.tail) {
      this.tail = previousNode;
      previousNode.next = null;
    } else {
      previousNode.next = pointer.next;
    }
  
    pointer = null;
  }
  
}

const list1 = new SinglyLinkedList();
