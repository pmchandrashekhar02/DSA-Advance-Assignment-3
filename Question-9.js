// Q.9 Find maximum level sum in Binary Tree.

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
  
    maximumLevelSum() {
      if (this.root === null) {
        return 0;
      }
  
      let maxSum = -Infinity;
      let maxLevel = 0;
      let currentLevel = 0;
  
      const queue = [];
      queue.push(this.root);
  
      while (queue.length > 0) {
        currentLevel++;
        let levelSum = 0;
        const levelSize = queue.length;
  
        for (let i = 0; i < levelSize; i++) {
          const node = queue.shift();
          levelSum += node.data;
  
          if (node.left !== null) {
            queue.push(node.left);
          }
  
          if (node.right !== null) {
            queue.push(node.right);
          }
        }
  
        if (levelSum > maxSum) {
          maxSum = levelSum;
          maxLevel = currentLevel;
        }
      }
  
      return maxLevel;
    }
  }
  
  const binaryTree = new BinaryTree();
  
  binaryTree.insert(1);
  binaryTree.insert(2);
  binaryTree.insert(3);
  binaryTree.insert(4);
  binaryTree.insert(5);
  binaryTree.insert(6);
  binaryTree.insert(7);
  
  const maxLevelSum = binaryTree.maximumLevelSum();
  console.log("Maximum level sum:", maxLevelSum);


// Output :- 
// Maximum level sum: 7