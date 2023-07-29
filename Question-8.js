// Q.8 Count subtress that sum up to a given value x in a binary tree.

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
  
    countSubtreesWithSum(node, targetSum) {
      if (node === null) {
        return 0;
      }
  
      const currentSum = this.countSubtreesWithSumRecursive(node, targetSum);
      const leftCount = this.countSubtreesWithSum(node.left, targetSum);
      const rightCount = this.countSubtreesWithSum(node.right, targetSum);
  
      return currentSum + leftCount + rightCount;
    }
  
    countSubtreesWithSumRecursive(node, targetSum) {
      if (node === null) {
        return 0;
      }
  
      const leftSum = this.calculateSubtreeSum(node.left);
      const rightSum = this.calculateSubtreeSum(node.right);
      const totalSum = leftSum + rightSum + node.data;
  
      let count = 0;
      if (totalSum === targetSum) {
        count = 1;
      }
  
      return count + this.countSubtreesWithSumRecursive(node.left, targetSum) + this.countSubtreesWithSumRecursive(node.right, targetSum);
    }
  
    calculateSubtreeSum(node) {
      if (node === null) {
        return 0;
      }
  
      const leftSum = this.calculateSubtreeSum(node.left);
      const rightSum = this.calculateSubtreeSum(node.right);
  
      return leftSum + rightSum + node.data;
    }
  }
  
  const binaryTree = new BinaryTree();
  
  binaryTree.insert(5);
  binaryTree.insert(-10);
  binaryTree.insert(3);
  binaryTree.insert(9);
  binaryTree.insert(8);
  binaryTree.insert(-4);
  binaryTree.insert(7);
  
  const targetSum = 7;
  const count = binaryTree.countSubtreesWithSum(binaryTree.root, targetSum);
  console.log("Number of subtrees with sum", targetSum + ":", count);
  

// Output :- 
// Number of subtrees with sum 7: 2
