### Description:

A `List` is a linear data structure that stores a collection of elements in a specific order. The elements in a list can be of any data type, and they are arranged sequentially, which allows for easy access, insertion, and removal of elements. Lists are commonly used for managing data that needs to be dynamically resized and for various algorithmic operations.

### Complexity:

- Accessing an element by index (e.g., `list.getElement()`): O(1) - Constant time complexity. Accessing an element by its index takes constant time as arrays, which is the underlying data structure for this implementation, provide direct access to elements using their index.

- Insertion and Deletion (e.g., `list.append()`, `list.insert()`, `list.remove()`): O(n) - Linear time complexity. In the worst case, adding or removing an element may require shifting elements in the array to maintain the sequential order, leading to a linear time complexity.

- Searching for an element (e.g., `list.find()`): O(n) - Linear time complexity. In the worst case, searching for an element may require traversing the entire list to find the element.

### Methods:

- `append(element)`: Adds an element to the end of the list.

- `find(element)`: Searches for the first occurrence of an element in the list and returns its index. If the element is not found, it returns -1.

- `remove(element)`: Removes the first occurrence of the specified element from the list.

- `size()`: Returns the number of elements in the list.

- `toString()`: Returns a string representation of the list.

- `insert(element, after)`: Inserts an element after a specified element in the list.

- `clear()`: Clears all elements from the list.

- `contains(element)`: Checks if the list contains a specific element and returns `true` if found, otherwise `false`.

- `front()`: Moves the current position to the front of the list.

- `end()`: Moves the current position to the end of the list.

- `prev()`: Moves the current position to the previous element in the list.

- `next()`: Moves the current position to the next element in the list.

- `currentPos()`: Returns the current position in the list.

- `moveTo(position)`: Moves the current position to a specific position in the list.

- `getElement()`: Returns the element at the current position.

### Features:

- The list is implemented using an underlying array to store the elements, providing constant time access to elements by index.

- The list allows duplicate elements, and the order of elements is preserved.

- The list can dynamically grow or shrink in size as elements are added or removed.

- The list does not enforce any size limit, but the maximum size is constrained by the memory available in the system.

- The implementation offers methods to manipulate the current position in the list, facilitating navigation and traversal.

- The `List` class can be instantiated to create multiple independent lists, each with its own set of elements and current position.
