/* eslint-disable no-console */
/* eslint-disable max-classes-per-file */
class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Append a new node to the end of the doubly linked list
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size += 1;
  }

  // Insert a new node after a given node
  insertAfter(data, targetData) {
    const newNode = new Node(data);
    let current = this.head;
    while (current) {
      if (current.data === targetData) {
        newNode.prev = current;
        newNode.next = current.next;
        if (current === this.tail) {
          this.tail = newNode;
        } else {
          current.next.prev = newNode;
        }
        current.next = newNode;
        this.size += 1;
        return true;
      }
      current = current.next;
    }
    return false; // Node with targetData not found
  }

  // Delete a node with a specific data value
  delete(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        if (current.prev) {
          current.prev.next = current.next;
        } else {
          this.head = current.next;
        }
        if (current.next) {
          current.next.prev = current.prev;
        } else {
          this.tail = current.prev;
        }
        this.size -= 1;
        return true;
      }
      current = current.next;
    }
    return false; // Node with data not found
  }

  // Get the size of the doubly linked list
  getSize() {
    return this.size;
  }

  // Display the elements of the doubly linked list
  display() {
    let current = this.head;
    const elements = [];
    while (current) {
      elements.push(current.data);
      current = current.next;
    }
    return elements;
  }
}

// Example usage
const myList = new DoublyLinkedList();
myList.append(1);
myList.append(2);
myList.append(3);

console.log(myList.display()); // Output: [1, 2, 3]

myList.insertAfter(4, 2);
console.log(myList.display()); // Output: [1, 2, 4, 3]

myList.delete(2);
console.log(myList.display()); // Output: [1, 4, 3]

console.log(myList.getSize()); // Output: 3
