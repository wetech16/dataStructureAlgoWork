class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
  size() {}
}

class Linklist {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  insertFirst(data) {
    let node = new Node(data, this.head);
    this.head = node;
    this.size++;
  }
  insertLast(data) {
    let node = new Node(data);
    if (this.head == null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  printListData() {
    while (this.head != null) {
      console.log(this.head.data);
      this.head = this.head.next;
    }
  }
  printRecurrsive() {
    if (this.head == null) return;
    console.log(this.head.data);
    this.head = this.head.next;
    this.printRecurrsive();
  }
  insertAt(data, index) {
    let node = new Node(data);
    if (index > this.size) return false;
    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let previousNode;
      let currentIndex = 0;
      let currentNode = this.head;
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      node.next = currentNode;

      previousNode.next = node;
    }
    this.size++;
  }
  getAt(index) {
    let currentIndex = 0;
    let currentNode = this.head;
    if (index > this.size - 1) return false;
    while (currentIndex < index) {
      currentIndex++;
      currentNode = currentNode.next;
    }
    return currentNode.data;
  }
  removeAt(index) {
    let currentNode = this.head;
    if (index > this.size - 1) return false;
    let count = 0;
    let previousNode;
    if (index == 0) {
      this.head = this.head.next;
    } else {
      while (count < index) {
        count++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    this.size--;
  }
  clearList() {
    this.head = null;
    this.size = 0;
  }
}

const ll = new Linklist();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertLast(300);
ll.insertAt(1, 1);
console.log("getAt", ll.getAt(0));
ll.removeAt(3);
// ll.printRecurrsive();
// ll.printListData();
// ll.clearList();
// ll.printListData();
