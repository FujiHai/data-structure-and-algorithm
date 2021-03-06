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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const result = [];

  if (!root) {
    return result;
  }

  const queue = [];
  queue.push(root);

  while (queue.length) {
    result.push([]);

    for (let i = 0, len = queue.length; i < len; i++) {
      const node = queue.shift();

      result[result.length - 1].push(node.val);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  return result;
};
