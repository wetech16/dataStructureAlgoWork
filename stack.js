class Stack {
  constructor() {
    this.items = [];
    this.top = -1;
  }
  push(item) {
    ++this.top;
    this.items[this.top] = item;
    console.log(`${item} is added to ${this.top}`);
    return this.top;
  }
  pop() {
    if (this.top == -1) {
      console.log("Error: No element to pop");
      return undefined;
    }
    this.top--;
    return this.items[++this.top];
  }
  peek() {
    console.log(`the top element is ${this.items[this.top]}`);
    return this.items[this.top];
  }
  isEmpty() {
    console.log(
      this.top == -1 ? "Stack is empty" : "Stack is not empty"
    );
    return this.top == -1;
  }
  size() {
    console.log(`${this.top + 1} elements are in the Stack`);
  }
  print() {
    let str = "";
    for (let i = 0; i <= this.top; i++) {
      str += this.items[i] + " ";
    }
    console.log("printing:", str);
    return str;
  }
  clear() {
    this.top = -1;
    this.items = [];
    console.log(`the stack has been clear. ${this.top + 1}`);
    return this.items;
  }
}

const stack = new Stack();
stack.push(100);
stack.push(200);
stack.peek();
stack.isEmpty();
stack.size();
stack.print();
console.log(stack.pop());
stack.clear();
stack.size();
stack.print();
stack.pop();
stack.push(100);
stack.print();
stack.size();
