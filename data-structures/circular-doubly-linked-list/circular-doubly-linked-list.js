class Node {
    constructor(data) {
        this.prev = null;
        this.data = data;
        this.next = null;
    }
}

class CircularDoublyLinkedList {
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
        } while (pointer !== this.tail);
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
        } while (pointer !== this.tail);
        return undefined;
    }

    findPreviousNodeByElement(element) {
        if (this.head === null) {
            return null;
        }

        let pointer = this.head;
        do {
            if (pointer.data === element) {
                return pointer.prev;
            }
            pointer = pointer.next;
        } while (pointer !== this.tail);

        return null;
    }

    findPreviousNodeByIndex(index) {
        if (this.head === null) {
            return null;
        }

        let currentIndex = 0;
        let pointer = this.head;
        do {
            if (currentIndex === index) {
                return pointer.prev;
            }
            currentIndex += 1;
            pointer = pointer.next;
        } while (pointer !== this.tail);

        return null;
    }

    length() {
        let count = 0;
        let pointer = this.head;
        do {
            count++;
            pointer = pointer.next;
        } while (pointer !== this.tail);
        return count;
    }

    print() {
        let pointer = this.head;
        do {
            console.log(pointer.data);
            pointer = pointer.next;
        } while (pointer !== this.tail);
    }

    printReverse() {
        let pointer = this.tail;
        do {
            console.log(pointer.data);
            pointer = pointer.prev;
        } while (pointer !== this.head);
    }

    insertAtHead(data) {
        let node = new Node(data);
        if (this.head === null) {
            node.prev = node;
            node.next = node;
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            node.next = this.head;
            this.tail.next = node;
            this.head.prev = node;
            this.head = node;
        }
    }

    insertAtTail(data) {
        let node = new Node(data);
        if (this.head === null) {
            node.prev = node;
            node.next = node;
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            node.next = this.head;
            this.tail.next = node;
            this.head.prev = node;
            this.tail = node;
        }
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
        this.tail.next = this.head;
        this.head.prev = this.tail;
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
        previousNode.next = this.head;
        this.head.prev = previousNode;
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

const list1 = new CircularDoublyLinkedList();
