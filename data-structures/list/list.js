/* eslint-disable no-console */
class List {
  constructor() {
    this.items = [];
    this.currentIndex = 0;
  }

  // Add an element to the end of the list
  append(element) {
    this.items.push(element);
  }

  // Find the index of the first occurrence of an element
  find(element) {
    return this.items.indexOf(element);
  }

  // Remove an element from the list
  remove(element) {
    const index = this.find(element);
    if (index !== -1) {
      this.items.splice(index, 1);
      return true;
    }
    return false;
  }

  // Get the number of elements in the list
  size() {
    return this.items.length;
  }

  // Get a string representation of the list
  toString() {
    return this.items.toString();
  }

  // Insert an element after a given element
  insert(element, after) {
    const index = this.find(after);
    if (index !== -1) {
      this.items.splice(index + 1, 0, element);
      return true;
    }
    return false;
  }

  // Clear the list
  clear() {
    this.items = [];
    this.currentIndex = 0;
  }

  // Check if the list contains an element
  contains(element) {
    return this.find(element) !== -1;
  }

  // Move the current position to the front of the list
  front() {
    this.currentIndex = 0;
  }

  // Move the current position to the end of the list
  end() {
    this.currentIndex = this.items.length - 1;
  }

  // Move the current position to the previous element
  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex -= 1;
    }
  }

  // Move the current position to the next element
  next() {
    if (this.currentIndex < this.items.length - 1) {
      this.currentIndex += 1;
    }
  }

  // Get the current position
  currentPos() {
    return this.currentIndex;
  }

  // Move to a specific position in the list
  moveTo(position) {
    if (position >= 0 && position < this.items.length) {
      this.currentIndex = position;
    }
  }

  // Get the element at the current position
  getElement() {
    return this.items[this.currentIndex];
  }
}

// Usage
const list1 = new List();

list1.append("item1");
list1.append("item2");
list1.append("item3");
list1.append("item4");

console.log(list1.toString()); // Output: "item1,item2,item3,item4"

console.log(list1.size()); // Output: 4

console.log(list1.contains("item3")); // Output: true
console.log(list1.contains("item5")); // Output: false

list1.front();
console.log(list1.getElement()); // Output: "item1"

list1.next();
console.log(list1.getElement()); // Output: "item2"

list1.insert("newItem", "item2");
console.log(list1.toString()); // Output: "item1,newItem,item2,item3,item4"

list1.prev();
list1.remove("newItem");
console.log(list1.toString()); // Output: "item1,item2,item3,item4"

list1.moveTo(2);
console.log(list1.getElement()); // Output: "item3"

list1.end();
list1.remove("item4");
console.log(list1.toString()); // Output: "item1,item2,item3"
