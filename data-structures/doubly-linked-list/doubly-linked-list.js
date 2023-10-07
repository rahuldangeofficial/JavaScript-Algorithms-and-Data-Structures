class Node {
  constructor(data) {
    this.prev = null;
    this.data = data;
    this.next = null;
  }
}

class DoublyLinkedList {
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
    while (pointer !== null) {
      if (pointer.data === element) {
        return pointer.prev;
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
    while (pointer !== null) {
      if (currentIndex === index) {
        return pointer.prev;
      }
      currentIndex += 1;
      pointer = pointer.next;
    }

    return null;
  }

  length() {
    let count = 0;
    let pointer = this.head;
    while (pointer !== null) {
      count++;
      pointer = pointer.next;
    }
    return count;
  }

  print() {
    let pointer = this.head;
    while (pointer !== null) {
      console.log(pointer.data);
      pointer = pointer.next;
    }
  }

  printReverse() {
    let pointer = this.tail;
    while (pointer !== null) {
      console.log(pointer.data);
      pointer = pointer.prev;
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
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
  }

  insertAtIndex(index, data) {
    if (index < 0 || index > this.length()) {
      throw new Error("Invalid index");
    }

    if (index === 0) {
      this.insertAtHead(data);
      return true;
    }

    if (index === this.length()) {
      this.insertAtTail(data);
      return true;
    }

    let node = new Node(data);
    let previousNode = this.findPreviousNodeByIndex(index);

    node.prev = previousNode;
    node.next = previousNode.next;

    previousNode.next.prev = node;
    previousNode.next = node;
    return true;
  }

  deleteAtHead() {
    if (this.head === null) {
      throw new Error("Linked list is empty");
    }

    this.head = this.head.next;
    this.head.prev = null;
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
    previousNode.next = null;
    this.tail = previousNode;
  }

  deleteAtIndex(index) {
    if (index < 0 || index >= this.length()) {
      throw new Error("Invalid index");
    }

    if (index === 0) {
      this.deleteAtHead();
      return true;
    }

    if (index === this.length() - 1) {
      this.deleteAtTail();
      return true;
    }

    let currentIndex = 0;
    let pointer = this.head;

    while (currentIndex < index - 1) {
      pointer = pointer.next;
      currentIndex++;
    }

    pointer.next = pointer.next.next;
    pointer.next.prev = pointer;

    return true;
  }

  clear() {
    this.head = null;
    this.tail = null;
  }
}

const list1 = new DoublyLinkedList();
