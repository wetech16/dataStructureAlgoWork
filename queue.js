(function main() {
  class Queue {
    constructor() {
      this.value = [];
      this.length = this.value.length;
    }
    enqueue(data) {
      this.value.push(data);
    }
    dequeue() {
      this.value.shift();
    }
    front() {
      console.log(this.value[0]);
    }
    print() {
      console.log(this.value);
    }
    size() {
      console.log(this.length);
    }
    isEmpty() {
      console.log(this.length === 0);
    }
  }
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.dequeue();
  queue.print();
  queue.size();
})();
