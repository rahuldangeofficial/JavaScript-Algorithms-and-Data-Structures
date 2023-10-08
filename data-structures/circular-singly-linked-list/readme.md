
# Circular Singly Linked List

A Circular Singly Linked List is a linear data structure composed of nodes where each node contains two parts: data and a reference (or pointer) to the next node. In this data structure, the last node's reference points back to the first node, forming a loop or a circle.

**Complexity Analysis:**

- **Time Complexity**:
  - Insertion/Deletion at Head: O(1)
  - Insertion/Deletion at Tail: O(n)
  - Insertion/Deletion at a Specific Index: O(n)
  - Search by Element: O(n)
  - Search by Index: O(n)
  - Length Calculation: O(n)
  - Print: O(n)

- **Space Complexity**: O(n) for storing the elements

**Methods and Descriptions:**

1. **Constructor**
   - Initializes an empty Circular Singly Linked List with `head` and `tail` set to `null`.

2. **findIndex(element)**
   - Searches for the first occurrence of the given `element` in the list and returns its index.
   - Complexity: O(n) due to a potentially full traversal.

3. **findElement(index)**
   - Retrieves the element at the specified `index` in the list.
   - Complexity: O(n) due to a potentially full traversal.

4. **findPreviousNodeByElement(element)**
   - Finds the previous node of a given `element` in the list.
   - Complexity: O(n) due to a potentially full traversal.

5. **findPreviousNodeByIndex(index)**
   - Finds the previous node of the node at the specified `index`.
   - Complexity: O(n) due to a potentially full traversal.

6. **length()**
   - Calculates and returns the length (number of nodes) in the list.
   - Complexity: O(n) due to a full traversal.

7. **print()**
   - Prints the elements of the Circular Singly Linked List while handling circular traversal.
   - Complexity: O(n) due to a potentially full traversal.

8. **insertAtHead(data)**
   - Inserts a new node with `data` at the head of the list.
   - Complexity: O(1)

9. **insertAtTail(data)**
   - Inserts a new node with `data` at the tail of the list.
   - Complexity: O(n) when the list is not empty, as it requires traversing to update the tail reference.

10. **insertAtIndex(index, data)**
    - Inserts a new node with `data` at the specified `index` in the list.
    - Complexity: O(n) due to the potential need to traverse to find the previous node.

11. **deleteAtHead()**
    - Deletes the node at the head of the list.
    - Complexity: O(1)

12. **deleteAtTail()**
    - Deletes the node at the tail of the list.
    - Complexity: O(n) when there's more than one element in the list, as it requires finding the previous node.

13. **deleteAtIndex(index)**
    - Deletes the node at the specified `index` in the list.
    - Complexity: O(n) due to the potential need to traverse to find the previous node.

14. **clear()**
    - Clears the entire Circular Singly Linked List by setting both `head` and `tail` to `null`.
    - Complexity: O(1)

**Key Points:**

- Circular Singly Linked Lists provide efficient insertions and deletions at the head, but operations at other positions may involve traversal.
- The circular nature of the list allows for continuous looping without an end, which can be useful in certain applications.
- Care must be taken when implementing methods to ensure the circular properties are maintained.

Circular Singly Linked Lists are a valuable data structure for various scenarios where looping or cyclic behavior is required, and they provide a balance between simplicity and efficiency for certain operations.
