class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
  size() {}
}

class Linklist {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  insertAtHead(data) {
    let node = new Node(data);
    if (this.head == null) {
      this.head = node;
      return;
    }
    this.head.prev = node;
    node.next = this.head;
    this.head = node;
  }
  insertAtTail(data) {
    let node = new Node(data);
    if (this.head == null) {
      this.head = node;
      return;
    }
    while (this.head.next != null) {
      this.head = this.head.next;
    }
    this.head.next = node;
    node.prev = this.head;
  }
  printListData() {
    while (this.head != null) {
      console.log(this.head.data);
      this.head = this.head.next;
    }
  }
  reversePrint() {
    while (this.head.next != null) {
      this.head = this.head.next;
    }
    while (this.head != null) {
      console.log(this.head.data);
      this.head = this.head.prev;
    }
  }
}

let ll = new Linklist();
ll.insertAtTail(2);
ll.insertAtTail(3);
ll.insertAtTail(4);
ll.reversePrint();
