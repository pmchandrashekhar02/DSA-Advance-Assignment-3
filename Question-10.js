// Q.10 Print the nodes at odd levels of a tree.

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
  
    printNodesAtOddLevels(node, level) {
      if (node === null) {
        return;
      }
  
      if (level % 2 === 1) {
        console.log(node.data);
      }
  
      this.printNodesAtOddLevels(node.left, level + 1);
      this.printNodesAtOddLevels(node.right, level + 1);
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
  
  console.log("Nodes at odd levels :- ");
  binaryTree.printNodesAtOddLevels(binaryTree.root, 1);
  


// Output :- 

// Nodes at odd levels :- 
// 1
// 3
// 5
// 7