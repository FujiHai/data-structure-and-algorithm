// 使用数组方式
class Queue {
  constructor() {
    this.queue = [];
    this.count = 0;
  }

  enQuque(item) {
    this.queue[this.count++] = item;
  }

  deQueue() {
    if (this.isEmpty()) {
      return;
    }

    this.count--;
    return this.queue.shift();
  }

  top() {
    if (this.isEmpty()) {
      return;
    }

    return this.queue[0];
  }

  size() {
    return this.count;
  }

  clear() {
    this.queue = [];
    this.count = 0;
  }

  isEmpty() {
    return this.count === 0;
  }
}
