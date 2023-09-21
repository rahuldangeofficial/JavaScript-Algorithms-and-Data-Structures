### Description:

A `DoublyLinkedList` is a linear data structure that extends the capabilities of a Singly Linked List. Each node in a Doubly Linked List contains three parts: data, a reference (pointer) to the previous node, and a reference to the next node. This bidirectional linkage allows for efficient traversal in both forward and backward directions, making it suitable for various applications.

### Methods:

1. `append(data)`: Appends a new node with the given `data` to the end of the doubly linked list. Time Complexity: O(1).

2. `insertAfter(data, targetData)`: Inserts a new node with the given `data` after the node containing `targetData`. Time Complexity: O(n) in the worst case.

3. `delete(data)`: Deletes the first occurrence of a node with the specified `data`. Time Complexity: O(n) in the worst case.

4. `getSize()`: Returns the number of nodes in the doubly linked list. Time Complexity: O(1).

5. `display()`: Returns an array containing the elements of the doubly linked list in their order. Time Complexity: O(n).

### Time Complexity Analysis:

- **Access**: Accessing a specific element by index is not a standard operation in doubly linked lists. To access an element by index, you may need to traverse from either the head or the tail, depending on the index. In the worst case, this is O(n).

- **Insertion**: Inserting a node at the beginning or end of the list (using `append`) is a constant time operation, O(1). Inserting a node after a specific node (using `insertAfter`) requires finding the target node, which is O(n) in the worst case.

- **Deletion**: Deleting a node (using `delete`) requires finding the node to delete, which is O(n) in the worst case.

- **Search**: Searching for a specific element in the list is a linear time operation, O(n), as you may need to traverse the list from one end to the other.

- **Size**: Getting the size of the list (using `getSize`) is a constant time operation, O(1).

- **Display**: Displaying the elements of the list (using `display`) requires traversing the list, resulting in a time complexity of O(n).

### Features:

- **Bidirectional Traversal**: Doubly Linked Lists allow efficient traversal both forward and backward through the list due to their previous and next pointers.

- **Insertions and Deletions**: Insertions and deletions can be performed efficiently, even at arbitrary positions in the list.

- **Size Tracking**: The size of the list is tracked and can be retrieved in constant time.

- **Memory Overhead**: Doubly Linked Lists have a slightly higher memory overhead compared to Singly Linked Lists due to the additional previous pointers.

- **Versatility**: Doubly Linked Lists are versatile and can be used in various applications, including implementing data structures like stacks, queues, and more complex structures like text editors.

Doubly Linked Lists are a fundamental data structure in computer science and are valuable for scenarios where bidirectional traversal or frequent insertions and deletions are required. They serve as a building block for more complex data structures and algorithms.