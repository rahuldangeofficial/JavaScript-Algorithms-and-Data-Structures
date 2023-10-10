# Circular Doubly Linked List

A Circular Doubly Linked List is a data structure in which elements, called nodes, are connected together with each node having references to both the next and the previous node. Unlike a singly linked list, where nodes are unidirectional, and a doubly linked list, where nodes are bidirectional but linear, a circular doubly linked list forms a closed loop. The tail node's "next" reference points to the head node, and the head node's "prev" reference points to the tail node, creating a circular structure.

**Node**

Each node in the Circular Doubly Linked List contains three components:

- `prev`: A reference to the previous node.
- `data`: The data or value stored in the node.
- `next`: A reference to the next node.

**Complexity**

The Circular Doubly Linked List has the following time complexity for various operations:

- **Insertion/Deletion at the Head or Tail**: O(1) - Constant time, as you have direct access to the head and tail nodes.
- **Insertion/Deletion at a Specific Index**: O(n) - Linear time in the worst case because you may need to traverse the list to find the insertion/deletion point.
- **Search by Value**: O(n) - Linear time, as you may need to traverse the entire list to find a specific value.
- **Search by Index**: O(n) - Linear time, as you may need to traverse the list up to the given index.
- **Length Calculation**: O(n) - Linear time, as you need to traverse the entire list to count the nodes.
- **Print**: O(n) - Linear time, as you need to traverse the list to print its elements.
- **Clear**: O(1) - Constant time, as it involves resetting the head and tail references.

**Methods**

Here are the methods implemented in your Circular Doubly Linked List:

1. `insertAtHead(data)`: Inserts a new node with the given data at the beginning of the list.
2. `insertAtTail(data)`: Inserts a new node with the given data at the end of the list.
3. `insertAtIndex(index, data)`: Inserts a new node with the given data at the specified index.
4. `deleteAtHead()`: Deletes the node at the head of the list.
5. `deleteAtTail()`: Deletes the node at the tail of the list.
6. `deleteAtIndex(index)`: Deletes the node at the specified index.
7. `findIndex(element)`: Finds the index of the first occurrence of a specific element.
8. `findElement(index)`: Finds the element at the specified index.
9. `findPreviousNodeByElement(element)`: Finds the previous node of a specific element.
10. `findPreviousNodeByIndex(index)`: Finds the previous node of the node at the specified index.
11. `length()`: Calculates and returns the length of the list.
12. `print()`: Prints the elements of the list from head to tail.
13. `printReverse()`: Prints the elements of the list from tail to head.
14. `clear()`: Clears the list by resetting the head and tail references.

**Key Points:**

Circular Doubly Linked Lists are used when you need to maintain a circular structure of data and need efficient insertion and deletion at both ends. They are often used in situations where elements need to be iterated infinitely or in a loop. Examples of applications include circular buffers, scheduling algorithms, and circular navigation in games or applications.
