/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  const result = [];
  const stack = [];

  while (root || stack.length) {
    while (root) {
      stack.push(root.right);
      result.push(root.val);
      root = root.left;
    }

    root = stack.pop();
  }

  return result;
};
