var MinStack = function () {
  this.stackA = [];
  this.countA = 0;

  this.stackB = [];
  this.countB = 0;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stackA[this.countA++] = val;

  if (this.countB === 0 || val <= this.getMin()) {
    this.stackB[this.countB++] = val;
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.top() === this.getMin()) {
    delete this.stackB[--this.countB];
  }

  delete this.stackA[--this.countA];
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stackA[this.countA - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.stackB[this.countB - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

const m = new MinStack();
