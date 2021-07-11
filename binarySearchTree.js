(function main() {
  class Node {
    constructor(data, left = null, right = null) {
      this.data = data;
      this.left = left;
      this.right = right;
    }
  }
  class Queue {
    constructor() {
      this.data = [];
    }
    push(data) {
      this.data.push(data);
    }
    pop() {
      this.data.shift();
    }
    isEmpty() {
      return this.data.length == 0;
    }
    front() {
      return this.data[0];
    }
  }
  class BST {
    constructor() {
      this.root = null;
    }
    insert(data) {
      this.root = sub(this.root, data);
      function sub(root, data) {
        if (root == null) {
          root = new Node(data);
        } else if (data <= root.data) {
          root.left = sub(root.left, data);
        } else root.right = sub(root.right, data);
        return root;
      }
    }
    finMin() {
      return sub(this.root);
      function sub(root) {
        if (root == null) {
          return -1;
        } else if (root.left == null) {
          return root.data;
        }
        return sub(root.left);
      }
    }
    finMax() {
      return sub(this.root);
      function sub(root) {
        if (root == null) return -1;
        if (root.right == null) return root.data;
        return sub(root.right);
      }
    }
    findHeight() {
      return sub(this.root);
      function sub(root) {
        if (root == null) return -1;
        let leftHeight = sub(root.left);
        let rightHeight = sub(root.right);
        return Math.max(leftHeight, rightHeight) + 1;
      }
    }
    levelOrder() {
      sub(this.root);
      function sub(root) {
        if (root == null) return;
        let q = new Queue();
        q.push(root);
        while (!q.isEmpty()) {
          let current = q.front();
          console.log(current.data);
          if (current.left != null) q.push(current.left);
          if (current.right != null) q.push(current.right);
          q.pop();
        }
      }
    }
    preOrder() {
      sub(this.root);
      function sub(root) {
        if (root == null) return;
        console.log(root.data);
        sub(root.left);
        sub(root.right);
      }
    }
    inOrder() {
      sub(this.root);
      function sub(root) {
        if (root == null) return;
        sub(root.left);
        console.log(root.data);
        sub(root.right);
      }
    }
    postOrder() {
      sub(this.root);
      function sub(root) {
        if (root == null) return;
        sub(root.left);
        sub(root.right);
        console.log(root.data);
      }
    }
    isBinaryTreeNaive() {
      return sub(this.root);
      function sub(root) {
        if (root == null) return true;
        if (
          isSubtreeLesser(root.left, root.data) &&
          isSubtreeGreater(root.right, root.data) &&
          sub(root.left) &&
          sub(root.right)
        ) {
          return true;
        } else {
          return false;
        }
      }
      function isSubtreeLesser(root, data) {
        if (root == null) return true;
        if (
          root.data <= data &&
          isSubtreeLesser(root.left, data) &&
          isSubtreeLesser(root.right, data)
        ) {
          return true;
        } else {
          return false;
        }
      }
      function isSubtreeGreater(root, data) {
        if (root == null) return true;
        if (
          root.data > data &&
          isSubtreeGreater(root.left, data) &&
          isSubtreeGreater(root.right, data)
        )
          return true;
        else return false;
      }
    }
    isBinaryTreeBoundry() {
      return sub(
        this.root,
        Number.NEGATIVE_INFINITY,
        Number.POSITIVE_INFINITY
      );
      function sub(root, min, max) {
        if (root == null) return true;
        if (
          root.data > min &&
          root.data < max &&
          sub(root.left, min, root.data) &&
          sub(root.right, root.data, max)
        )
          return true;
        else return false;
      }
    }
  }
  const bst = new BST();
  bst.insert(100);
  bst.insert(200);
  bst.insert(190);
  bst.insert(300);
  bst.insert(80);
  bst.insert(90);
  bst.insert(95);
  console.log(bst.root);
  //   console.log(bst.finMax());
  //   console.log(bst.findHeight());
  // console.log(bst.levelOrder());
  // bst.preOrder();
  // bst.inOrder();
  // bst.postOrder();
  // console.log(bst.isBinaryTreeNaive());
  console.log(bst.isBinaryTreeBoundry());
})();
