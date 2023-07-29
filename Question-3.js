// Q.3 Perform Pre-order, Post-order, In-order traversal.

// Node class represents each node in the Binary Tree
class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  // BinaryTree class represents the Binary Tree itself
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    // Method to insert a new node into the Binary Tree
    insert(data) {
      const newNode = new Node(data);
  
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    // Helper method to recursively insert a new node
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
  
    // Pre-order traversal: Root -> Left -> Right
    preOrderTraversal(node) {
      if (node !== null) {
        console.log(node.data);
        this.preOrderTraversal(node.left);
        this.preOrderTraversal(node.right);
      }
    }
  
    // Post-order traversal: Left -> Right -> Root
    postOrderTraversal(node) {
      if (node !== null) {
        this.postOrderTraversal(node.left);
        this.postOrderTraversal(node.right);
        console.log(node.data);
      }
    }
  
    // In-order traversal: Left -> Root -> Right
    inOrderTraversal(node) {
      if (node !== null) {
        this.inOrderTraversal(node.left);
        console.log(node.data);
        this.inOrderTraversal(node.right);
      }
    }
  }
  
  // Example usage:
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
  
  console.log("Pre-order traversal:");
  binaryTree.preOrderTraversal(binaryTree.root);
  
  console.log("Post-order traversal:");
  binaryTree.postOrderTraversal(binaryTree.root);
  
  console.log("In-order traversal:");
  binaryTree.inOrderTraversal(binaryTree.root);
  



  
// Output :- 

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

// In-order traversal:
// 1
// 3
// 4
// 6
// 7
// 8
// 10
// 13
// 14

