# Stack (Using Array)

A stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle, meaning that the last element added to the stack is the first one to be removed. It can be visualized as a collection of elements with two primary operations: push (adding an element to the top) and pop (removing the top element).

**Complexity**

The stack data structure has the following time complexities for various operations:

- **Push**: O(1) - Constant time, as adding an element to the top of the stack requires only one operation, regardless of the stack's size.
- **Pop**: O(1) - Constant time, as removing the top element is a single operation, irrespective of the stack's size.
- **Top**: O(1) - Constant time, as retrieving the top element is a direct operation.
- **Length**: O(1) - Constant time, as getting the number of elements in the stack can be done instantly.
- **Clear**: O(1) - Constant time, as clearing the stack involves resetting the internal data structure.

**Methods**

Here are the commonly used methods associated with a stack:

1. `push(element)`: Adds an element to the top of the stack.
2. `pop()`: Removes and returns the top element from the stack.
3. `top()`: Returns the top element without removing it.
4. `length()`: Returns the number of elements currently in the stack.
5. `clear()`: Removes all elements from the stack, effectively resetting it.
