var MaxQueue = function () {
  this.queue = {};
  this.countQ = this.headQ = 0;

  this.dqueue = {};
  this.countDq = this.headDq = 0;
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function () {
  if (this.countDq - this.headDq === 0) {
    return -1;
  }

  return this.dqueue[this.headDq];
};

/**
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function (value) {
  while (
    this.countDq - this.headDq !== 0 &&
    value > this.dqueue[this.countDq - 1]
  ) {
    // 双端队列队尾出队
    delete this.dqueue[this.countDq--];
  }

  this.dqueue[this.countDq++] = value;

  // 原队列进队
  this.queue[this.countQ++] = value;
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function () {
  if (this.countQ - this.headQ === 0) {
    return -1;
  }

  // 判断[最大值]双端队列是否要删除
  if (this.queue[this.headQ] === this.max_value()) {
    delete this.dqueue[this.headDq++];
  }

  const headData = this.queue[this.headQ];
  delete this.queue[this.headQ++];
  return headData;
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */
