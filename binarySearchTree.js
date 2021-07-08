const util = require("util");

function main() {
  class Node {
    constructor(data, left = null, right = null) {
      this.data = data;
      this.left = left;
      this.right = right;
    }
  }
  // class BST {
  //   insert(root, data) {
  //     if (root === null) {
  //       root = new Node(data);
  //     } else if (data <= root.data) {
  //       root.left = this.insert(root.left, data);
  //     } else {
  //       root.right = this.insert(root.right, data);
  //     }
  //     return root;
  //   }
  // }
  // let root = null;
  // let bst = new BST();
  // root = bst.insert(root, 100);
  // root = bst.insert(root, 200);
  // root = bst.insert(root, 300);
  // root = bst.insert(root, 190);
  // root = bst.insert(root, 90);
  // root = bst.insert(root, 80);
  // console.log(root);

  class BST {
    constructor() {
      this.root = null;
    }

    // insert(data) {
    //   this.root = add(this.root, data);
    //   function add(root, data) {
    //     if (root == null) {
    //       root = new Node(data);
    //     } else if (data <= root.data) {
    //       root.left = add(root.left, data);
    //     } else {
    //       root.right = add(root.right, data);
    //     }
    //     return root;
    //   }
    // }

    insert(data) {
      this.root = insertRoot(this.root, data);
      function insertRoot(root, data) {
        if (root == null) {
          root = new Node(data);
        } else if (root.data < data) {
          root.right = insertRoot(root.right, data);
        } else {
          root.left = insertRoot(root.left, data);
        }
        return root;
      }
    }

    find(data) {
      return findRoot(this.root, data);
      function findRoot(root, data) {
        if (root == null) return false;
        else if (root.data == data) return true;
        else if (data <= root.data) return findRoot(root.left, data);
        else return findRoot(root.right, data);
      }
    }
    findMin() {
      let tempRoot = this.root;
      return subFindMin(tempRoot);
      function subFindMin(root) {
        if (root == null) return -1;
        if (root.left == null) return root.data;
        return subFindMin(root.left);
      }
    }
    findMax() {
      let tempRoot = this.root;
      return (function subFindMax(root) {
        if (root == null) return -1;
        if (root.right == null) return root.data;
        return subFindMax(root.right);
      })(tempRoot);
    }
    findHeight() {
      let tempRoot = this.root;
      return (function subHeight(root) {
        if (root == null) return -1;
        let leftMax = subHeight(root.left);
        let rightMax = subHeight(root.right);
        return Math.max(leftMax, rightMax) + 1;
      })(tempRoot);
    }
  }

  let bst = new BST();
  bst.insert(100);
  bst.insert(80);
  bst.insert(200);
  // bst.insert(300);
  // bst.insert(400);
  // bst.insert(500);
  // bst.insert(90);
  // bst.insert(80);
  console.dir(util.inspect(bst.root, true, 10));
  console.log(bst.find(200));
  console.log(bst.findMin());
  console.log(bst.findMax());
  console.log(bst.findHeight());
  // console.dir(JSON.stringify(bst.root));
}

main();
