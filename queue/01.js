// 使用对象方式
class Queue {
  constructor() {
    this.queue = {};
    this.count = 0;
    this.head = 0;
  }

  enQueue(item) {
    this.queue[this.count++] = item;
  }

  deQueue() {
    if (this.isEmpty()) {
      return;
    }

    const headData = this.queue[this.head];
    delete this.queue[this.head];

    this.head++;
    this.count--;

    return headData;
  }

  clear() {
    this.queue = {};
    this.count = 0;
    this.head = 0;
  }

  top() {
    if (this.isEmpty()) {
      return;
    }

    return this.queue[this.head];
  }

  isEmpty() {
    return this.count === 0;
  }
}
