// Q.6 Find sum of all left leaves in a given Binary Tree.

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
  
    isLeaf(node) {
      return node !== null && node.left === null && node.right === null;
    }
  
    sumOfLeftLeaves(node) {
      if (node === null) {
        return 0;
      }
  
      let sum = 0;
  
      if (this.isLeaf(node.left)) {
        sum += node.left.data;
      } else {
        sum += this.sumOfLeftLeaves(node.left);
      }
  
      sum += this.sumOfLeftLeaves(node.right);
  
      return sum;
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
  
  const sum = binaryTree.sumOfLeftLeaves(binaryTree.root);
  console.log("Sum of left leaves:", sum);
  

// Output :- 
// Sum of left leaves: 14

