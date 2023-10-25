class Node {
    constructor(data) {
        this.left = null;
        this.data = data;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insertElement(data) {
        const newNode = new Node(data);

        const insert = (newNode, pointer) => {
            if (pointer === null) {
                this.root = newNode;
                return true;
            }

            if (newNode.data < pointer.data) {
                if (pointer.left === null) {
                    pointer.left = newNode;
                    return true;
                } else {
                    return insert(newNode, pointer.left);
                }
            }

            if (newNode.data > pointer.data) {
                if (pointer.right === null) {
                    pointer.right = newNode;
                    return true;
                } else {
                    return insert(newNode, pointer.right);
                }
            }

            return false;
        };

        insert(newNode, this.root);
    }

    printInorder() {
        const inorderTraverse = (pointer) => {
            if (pointer === null) {
                return;
            }

            if (pointer.left !== null) {
                inorderTraverse(pointer.left);
            }
            console.log(pointer.data);
            if (pointer.right !== null) {
                inorderTraverse(pointer.right);
            }
            return;
        };

        inorderTraverse(this.root);
    }

    printPreorder() {
        const preorderTraverse = (pointer) => {
            if (pointer === null) {
                return;
            }
            console.log(pointer.data);
            if (pointer.left !== null) {
                preorderTraverse(pointer.left);
            }
            if (pointer.right !== null) {
                preorderTraverse(pointer.right);
            }
            return;
        };

        preorderTraverse(this.root);
    }

    printPostorder() {
        const postorderTraverse = (pointer) => {
            if (pointer === null) {
                return;
            }

            if (pointer.left !== null) {
                postorderTraverse(pointer.left);
            }
            if (pointer.right !== null) {
                postorderTraverse(pointer.right);
            }
            console.log(pointer.data);
            return;
        };
        postorderTraverse(this.root);
    }

    BFS() {
        if (!this.root) {
            return [];
        }

        const result = [];
        const queue = [this.root];

        while (queue.length > 0) {
            const currentNode = queue.shift();

            result.push(currentNode.data);

            if (currentNode.left) {
                queue.push(currentNode.left);
            }

            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }

        return result;
    }


    searchMin() {
        let min = this.root.data;
        const traverse = (pointer) => {
            if (pointer !== null) {
                if (pointer.data < min) {
                    min = pointer.data;
                }
                traverse(pointer.left);
            }
        };
        traverse(this.root);
        return min;
    }

    searchMax() {
        let max = this.root.data;
        const traverse = (pointer) => {
            if (pointer !== null) {
                if (pointer.data > max) {
                    max = pointer.data;
                }
                traverse(pointer.right);
            }
        };

        traverse(this.root);
        return max;
    }

    searchElement(element) {
        const traverse = (pointer) => {
            if (pointer === null) {
                return false;
            }
            if (pointer.data === element) {
                return true;
            }
            if (pointer.data > element) {
                return traverse(pointer.left);
            }
            if (pointer.data < element) {
                return traverse(pointer.right);
            }
        };
        return traverse(this.root);
    }

    deleteElement(element) {
        const deleteNode = (node, element) => {
            if (node === null) {
                return null;
            }

            if (element < node.data) {
                node.left = deleteNode(node.left, element);
            }
            if (element > node.data) {
                node.right = deleteNode(node.right, element);
            }
            if (element === node.data) {
                if (node.left === null) {
                    return node.right;
                }
                if (node.right === null) {
                    return node.left;
                }

                node.data = this.minValueNode(node.right).data;
                node.right = deleteNode(node.right, node.data);
            }
            return node;
        };

        this.root = deleteNode(this.root, element);
    }

    minValueNode(node) {
        let current = node;
        while (current.left !== null) {
            current = current.left;
        }
        return current;
    }
}

const bst1 = new BST();
