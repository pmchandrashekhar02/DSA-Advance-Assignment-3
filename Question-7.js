// Q.7 Find sum of all nodes of the given perfect binary tree.

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
  
    constructPerfectBinaryTree(height) {
      this.root = this.constructTreeRecursive(height, 1);
    }
  
    constructTreeRecursive(height, value) {
      if (height === 0) {
        return null;
      }
  
      const root = new Node(value);
      root.left = this.constructTreeRecursive(height - 1, value * 2);
      root.right = this.constructTreeRecursive(height - 1, value * 2 + 1);
  
      return root;
    }
  
    sumOfAllNodes(node) {
      if (node === null) {
        return 0;
      }
  
      const leftSum = this.sumOfAllNodes(node.left);
      const rightSum = this.sumOfAllNodes(node.right);
      const currentSum = node.data;
  
      return leftSum + rightSum + currentSum;
    }
  }
  
  const binaryTree = new BinaryTree();
  
  binaryTree.constructPerfectBinaryTree(3);
  
  const sum = binaryTree.sumOfAllNodes(binaryTree.root);
  console.log("Sum of all nodes:", sum);
  

  
// Output :- 
// Sum of all nodes: 15
