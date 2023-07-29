// Q.1 Implement Binary tree.

class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    insert(data) {
      const newNode = new Node(data);
  
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    insertNode(node, newNode) {
      if (newNode.data < node.data) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
  

    inOrderTraversal(node) {
      if (node !== null) {
        this.inOrderTraversal(node.left);
        console.log(node.data);
        this.inOrderTraversal(node.right);
      }
    }
  
    preOrderTraversal(node) {
      if (node !== null) {
        console.log(node.data);
        this.preOrderTraversal(node.left);
        this.preOrderTraversal(node.right);
      }
    }
  
    postOrderTraversal(node) {
      if (node !== null) {
        this.postOrderTraversal(node.left);
        this.postOrderTraversal(node.right);
        console.log(node.data);
      }
    }
  }
  
  const binaryTree = new BinaryTree();
  
  binaryTree.insert(8);
  binaryTree.insert(3);
  binaryTree.insert(10);
  binaryTree.insert(1);
  binaryTree.insert(6);
  binaryTree.insert(14);
  binaryTree.insert(4);
  binaryTree.insert(7);
  binaryTree.insert(13);
  
  console.log("In-order traversal:");
  binaryTree.inOrderTraversal(binaryTree.root);
  
  console.log("Pre-order traversal:");
  binaryTree.preOrderTraversal(binaryTree.root);
  
  console.log("Post-order traversal:");
  binaryTree.postOrderTraversal(binaryTree.root);
  


  
// Output :- 

//   In-order traversal:
// 1
// 3
// 4
// 6
// 7
// 8
// 10
// 13
// 14

// Pre-order traversal:
// 8
// 3
// 1
// 6
// 4
// 7
// 10
// 14
// 13

// Post-order traversal:
// 1
// 4
// 7
// 6
// 3
// 13
// 14
// 10
// 8
