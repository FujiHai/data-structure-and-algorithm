/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  if (k <= 1) {
    return nums;
  }

  let i = 0;
  let result = [];
  let dqueue = [];

  // 处理第一个窗口的情况
  for (; i < k; i++) {
    while (dqueue.length > 0 && nums[i] > dqueue[dqueue.length - 1]) {
      dqueue.pop();
    }

    dqueue.push(nums[i]);
  }

  result.push(dqueue[0]);

  // 第二个窗口的情况
  const len = nums.length;
  for (; i < len; i++) {
    while (dqueue.length > 0 && nums[i] > dqueue[dqueue.length - 1]) {
      dqueue.pop();
    }

    dqueue.push(nums[i]);

    // 如果是最大值不在当前窗口，需要移除
    if (dqueue[0] === nums[i - k]) {
      dqueue.shift();
    }

    result.push(dqueue[0]);
  }

  return result;
};
