class Stack {
  constructor() {
    this.data = [];
    this.count = 0;
  }

  push(item) {
    this.data[this.count++] = item;
  }

  isEmpty() {
    return this.count === 0;
  }

  pop() {
    if (this.isEmpty()) {
      console.log("stack is empty!");
      return;
    }

    const temp = this.data[this.count - 1];
    delete this.data[--this.count];
    return temp;
  }

  top() {
    if (this.isEmpty()) {
      console.log("stack is empty");
      return;
    }

    return this.data[this.count - 1];
  }

  size() {
    return this.count;
  }

  clear() {
    this.data = [];
    this.count = 0;
  }
}

const s = new Stack();
s.push("a");
console.log(s);
