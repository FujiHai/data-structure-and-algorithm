// 使用类对象方式实现双端队列
class DoubleQueue {
  constructor() {
    this.queue = {};
    this.count = 0;
    this.head = 0;
  }

  addFront(item) {
    this.queue[--this.head] = item;
  }

  addBack(item) {
    this.queue[this.count++] = item;
  }

  removeFront() {
    if (this.isEmpty()) {
      return;
    }

    const headData = this.queue[this.head];
    delete this.queue[this.head++];
    return headData;
  }

  removeBack() {
    if (this.isEmpty()) {
      return;
    }

    const backData = this.queue[this.count - 1];
    delete this.queue[--this.count];
    return backData;
  }

  frontTop() {
    if (this.isEmpty()) {
      return;
    }

    return this.queue[this.head];
  }

  backTop() {
    if (this.isEmpty()) {
      return;
    }

    return this.queue[this.count - 1];
  }

  size() {
    return this.count - this.head;
  }

  isEmpty() {
    return this.size() === 0;
  }
}
