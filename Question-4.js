// Q.4 Function to print all the leaves in a given binary tree.

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
  
    printLeafNodes(node) {
      if (node === null) {
        return;
      }
  
      if (node.left === null && node.right === null) {
        console.log(node.data);
      }
  
      this.printLeafNodes(node.left);
      this.printLeafNodes(node.right);
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
  
  console.log("Leaf nodes:");
  binaryTree.printLeafNodes(binaryTree.root);
  

// Output :- 

// Leaf nodes:
// 1
// 4
// 7
// 13
