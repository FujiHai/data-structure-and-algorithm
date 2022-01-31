/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let notFoundStack = [0];
  let stackCount = 1;

  let tLen = temperatures.length;
  let arr = new Array(tLen).fill(0);

  for (let i = 1; i < tLen; i++) {
    let temp = temperatures[i];

    while (stackCount && temp > temperatures[notFoundStack[stackCount - 1]]) {
      let idx = notFoundStack.pop();
      stackCount--;

      arr[idx] = i - idx;
    }

    notFoundStack.push(i);
    stackCount++;
  }

  return arr;
};
