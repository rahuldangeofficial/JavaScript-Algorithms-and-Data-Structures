class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class CircularSinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    findIndex(element) {
        let index = 0;
        let pointer = this.head;
        do {
            if (pointer.data === element) {
                return index;
            }
            pointer = pointer.next;
            index += 1;
        } while (pointer !== this.head);
        return -1;
    }

    findElement(index) {
        let currentIndex = 0;
        let pointer = this.head;
        do {
            if (currentIndex === index) {
                return pointer.data;
            }
            currentIndex += 1;
            pointer = pointer.next;
        } while (pointer !== this.head);
        return undefined;
    }

    findPreviousNodeByElement(element) {
        if (this.head === null) {
            return null;
        }
        if (this.head.data === element) {
            return this.tail;
        }
        let pointer = this.head;
        do {
            if (pointer.next.data === element) {
                return pointer;
            }
            pointer = pointer.next;
        } while (pointer !== this.head);

        return null;
    }

    findPreviousNodeByIndex(index) {
        if (this.head === null) {
            return null;
        }

        if (index === 0) {
            return this.tail;
        }

        if (index < 0 || index >= this.length()) {
            throw new Error("Invalid index");
        }

        let currentIndex = 0;
        let pointer = this.head;
        do {
            if (currentIndex === index - 1) {
                return pointer;
            }
            currentIndex += 1;
            pointer = pointer.next;
        } while (pointer !== this.head);

        return null;
    }

    length() {
        let count = 0;
        let pointer = this.head;
        do {
            count++;
            pointer = pointer.next;
        } while (pointer !== this.head);
        return count;
    }

    print() {
        let pointer = this.head;
        do {
            console.log(pointer.data);
            pointer = pointer.next;
        } while (pointer !== this.head);
    }

    insertAtHead(data) {
        let node = new Node(data);
        node.next = this.head;
        this.head = node;

        if (this.tail === null) {
            this.tail = this.head;
        }
        this.tail.next = node;
    }

    insertAtTail(data) {
        if (this.head === null) {
            this.insertAtHead(data);
            return;
        }

        let node = new Node(data);
        node.next = this.head;
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

        node.next = previousNode.next;
        previousNode.next = node;

        return true;
    }

    deleteAtHead() {
        if (this.head === null) {
            throw new Error("Linked list is empty");
        }

        this.head = this.head.next;
        this.tail.next = this.head;
        if (this.head === null) {
            this.tail = null;
        }
    }

    deleteAtTail() {
        if (this.head === null) {
            throw new Error("Linked list is empty");
        }

        if (this.head.next === this.head) {
            this.head = null;
            this.tail = null;
            return;
        }

        let previousNode = this.findPreviousNodeByElement(this.tail.data);
        this.tail = previousNode;
        previousNode.next = this.head;
    }

    deleteAtIndex(index) {
        if (index < 0 || index >= this.length()) {
            throw new Error("Invalid index");
        }

        let previousNode = this.findPreviousNodeByIndex(index);

        if (index === 0) {
            this.deleteAtHead();
            return true;
        }

        if (index === this.length() - 1) {
            this.deleteAtTail();
            return true;
        }

        previousNode.next = previousNode.next.next;
        return true;
    }

    clear() {
        this.head = null;
        this.tail = null;
    }
}

const list1 = new CircularSinglyLinkedList();
