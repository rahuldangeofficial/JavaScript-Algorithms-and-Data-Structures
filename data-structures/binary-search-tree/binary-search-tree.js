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
        let node = new Node(data);
        if (this.root === null) {
            this.root = node;
            return true;
        }
        const insertHelper = (refNode, newNode) => {
            if (newNode.data > refNode.data) {
                if (refNode.right !== null) {
                    return insertHelper(refNode.right, newNode);
                } else {
                    refNode.right = node;
                    return true;
                }
            }
            if (newNode.data < refNode.data) {
                if (refNode.left !== null) {
                    return insertHelper(refNode.left, newNode);
                } else {
                    refNode.left = node;
                    return true;
                }
            }
            return false;
        };
        return insertHelper(this.root, node);
    }
    getInorderElements() {
        const elements = [];
        const inorderTraversal = (refNode) => {
            if (refNode !== null) {
                inorderTraversal(refNode.left);
                elements.push(refNode.data);
                inorderTraversal(refNode.right);
            }
        };
        inorderTraversal(this.root);
        return elements;
    }
    getPreorderElements() {
        const elements = [];
        const preorderTraversal = (refNode) => {
            if (refNode !== null) {
                elements.push(refNode.data);
                preorderTraversal(refNode.left);
                preorderTraversal(refNode.right);
            }
        };
        preorderTraversal(this.root);
        return elements;
    }
    getPreorderElements() {
        const elements = [];
        const preorderTraversal = (refNode) => {
            if (refNode !== null) {
                elements.push(refNode.data);
                preorderTraversal(refNode.left);
                preorderTraversal(refNode.right);
            }
        };
        preorderTraversal(this.root);
        return elements;
    }
    getPostorderElements() {
        const elements = [];
        const postorderTraversal = (refNode) => {
            if (refNode !== null) {
                postorderTraversal(refNode.left);
                postorderTraversal(refNode.right);
                elements.push(refNode.data);
            }
        };
        postorderTraversal(this.root);
        return elements;
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
    searchMin(refNode = this.root) {
        if (refNode !== null) {
            if (refNode.left === null) {
                return refNode.data;
            } else {
                return this.searchMin(refNode.left);
            }
        }
    }
    searchMax(refNode = this.root) {
        if (refNode !== null) {
            if (refNode.right === null) {
                return refNode.data;
            } else {
                return this.searchMax(refNode.right);
            }
        }
    }
    searchElement(element) {
        const recursiveSearch = (refNode, element) => {
            if (refNode !== null) {
                if (element === refNode.data) {
                    return true;
                }
                if (element > refNode.data) {
                    return recursiveSearch(refNode.right, element);
                }
                if (element < refNode.data) {
                    return recursiveSearch(refNode.left, element);
                }
            }
            return false;
        };
        return recursiveSearch(this.root, element);
    }
    deleteElement(element) {
        const provideNewRef = (refNode, element) => {
            if (element < refNode.data) {
                refNode.left = provideNewRef(refNode.left, element);
            }
            if (element > refNode.data) {
                refNode.right = provideNewRef(refNode.right, element);
            }
            if (element === refNode.data) {
                if (refNode.left === null) {
                    return refNode.right;
                }
                if (refNode.right === null) {
                    return refNode.left;
                }

                refNode.data = this.searchMin(refNode.right);
                refNode.right = this.provideNewRef(refNode.right, refNode.data);
            }
            return refNode;
        };
        this.root = provideNewRef(this.root, element);
    }
}

let bst1 = new BST();
