// Q.5 Implement BFS (Breath First Search) and DFS (Depth First Search).

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
  
    bfs() {
      if (this.root === null) {
        return;
      }
  
      const queue = [];
      queue.push(this.root);
  
      while (queue.length > 0) {
        const node = queue.shift();
        console.log(node.data);
  
        if (node.left !== null) {
          queue.push(node.left);
        }
  
        if (node.right !== null) {
          queue.push(node.right);
        }
      }
    }
  
    dfsPreOrder(node) {
      if (node === null) {
        return;
      }
  
      console.log(node.data);
      this.dfsPreOrder(node.left);
      this.dfsPreOrder(node.right);
    }
  
    dfsInOrder(node) {
      if (node === null) {
        return;
      }
  
      this.dfsInOrder(node.left);
      console.log(node.data);
      this.dfsInOrder(node.right);
    }
  
    dfsPostOrder(node) {
      if (node === null) {
        return;
      }
  
      this.dfsPostOrder(node.left);
      this.dfsPostOrder(node.right);
      console.log(node.data);
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
  
  console.log("BFS:");
  binaryTree.bfs();
  
  console.log("DFS - Pre-order :- "+binaryTree.dfsPreOrder(binaryTree.root));  
  console.log("DFS - In-order:- "+binaryTree.dfsInOrder(binaryTree.root));
  console.log("DFS - Post-order:- "+binaryTree.dfsPostOrder(binaryTree.root));

  

//  Output :- 

// BFS:
// 8
// 3
// 10
// 1
// 6
// 14
// 4
// 7
// 13
// 8
// 3
// 1
// 6
// 4
// 7
// 10
// 14
// 13
// DFS - Pre-order :- undefined
// 1
// 3
// 4
// 6
// 7
// 8
// 10
// 13
// 14
// DFS - In-order:- undefined
// 1
// 4
// 7
// 6
// 3
// 13
// 14
// 10
// 8
// DFS - Post-order:- undefined