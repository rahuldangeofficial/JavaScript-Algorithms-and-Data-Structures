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
    this.size = 0;
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

      pointer = pointer.next;
      currentIndex += 1;
    }

    return undefined;
  }
  previousNodeByElement(element) {
    let pointer = this.head;

    while (pointer.next !== null) {
      if (pointer.next.data === element) {
        return pointer;
      }

      pointer = pointer.next;
    }

    return null;
  }
  previousNodeByIndex(index) {
    let pointer = this.head;
    let currentIndex = 0;

    while (pointer.next !== null) {
      if (currentIndex + 1 === index) {
        return pointer;
      }

      pointer = pointer.next;
      currentIndex += 1;
    }

    return null;
  }
  length() {
    return this.size;
  }
  getElements() {
    let pointer = this.head;
    let elements = [];

    while (pointer !== null) {
      elements.push(pointer.data);
      pointer = pointer.next;
    }

    return elements;
  }
  insertAtHead(data) {
    if (data === undefined) {
      return false;
    }

    const node = new Node(data);

    node.next = this.head;
    this.head = node;
    this.size += 1;

    if (this.tail === null) {
      this.tail = this.head;
    }
    return true;
  }
  insertAtTail(data) {
    if (data === undefined) {
      return false;
    }

    if (this.tail === null) {
      return this.insertAtHead(data);
    }

    const node = new Node(data);
    this.tail.next = node;
    this.size += 1;

    return true;
  }
  insertAtIndex(index, data) {
    if (index === undefined || data === undefined) {
      return false;
    }
    if (index < 0 || index > this.size) {
      return false;
    }
    if (index === 0) {
      return this.insertAtHead(data);
    }
    if (index === this.size) {
      return this.insertAtTail(data);
    }

    const node = new Node(data);

    let prevNode = this.previousNodeByIndex(index);

    node.next = prevNode.next;
    prevNode.next = node;

    this.size += 1;

    return true;
  }
  deleteAtHead() {
    if (this.head === null) {
      return false;
    }

    if (this.tail === this.head) {
      this.head = null;
      this.tail = null;
      this.size -= 1;

      return true;
    }

    this.head = this.head.next;

    return true;
  }
  deleteAtTail() {
    if (this.head === null) {
      return false;
    }

    if (this.tail === this.head) {
      return this.deleteAtHead();
    }

    let prevNode = this.previousNodeByIndex(this.size - 1);
    prevNode.next = null;
    this.tail = prevNode;
    this.size -= 1;

    return true;
  }
  deleteAtIndex(index) {
    if (index < 0 || index >= this.length()) {
      return false;
    }
    if (index === 0) {
      return this.deleteAtHead();
    }
    if (index === this.length() - 1) {
      return this.deleteAtTail();
    }

    let prevNode = this.previousNodeByIndex(index);
    prevNode.next = prevNode.next.next;
    this.size -= 1;

    return true;
  }
  reverse() {
    if (this.head === null) {
      return false;
    }

    this.tail = this.head;

    let prev = null;
    let current = this.head;
    let next = null;

    while (current !== null) {
      next = current.next;
      current.next = prev;

      prev = current;
      current = next;
    }

    this.head = prev;

    return true;
  }
  clear() {
    this.head = null;
    this.tail = null;
  }
}

const sll1 = new SinglyLinkedList();