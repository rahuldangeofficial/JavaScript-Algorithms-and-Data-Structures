/* eslint-disable no-console */
/* eslint-disable max-classes-per-file */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = new Node("head");
  }

  find(data) {
    let currentNode = this.head;
    while (currentNode.data !== data && currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  insert(newData, afterData) {
    const newNode = new Node(newData);
    const currentNode = this.find(afterData);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  display() {
    let currentNode = this.head.next;
    while (currentNode !== null) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }

  findPrevious(data) {
    let currentNode = this.head;
    while (currentNode.next !== null && currentNode.next.data !== data) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  remove(data) {
    const previousNode = this.findPrevious(data);
    if (previousNode.next !== null) {
      previousNode.next = previousNode.next.next;
    }
  }
}

// Example usage of LinkedList
const shoppingList = new SinglyLinkedList();
shoppingList.insert("Milk", "head");
shoppingList.insert("Bread", "Milk");
shoppingList.insert("Eggs", "Bread");

shoppingList.display();
