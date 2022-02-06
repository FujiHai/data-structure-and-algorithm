/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (head === null) {
    return null;
  }

  let slow = head,
    fast = head;

  while (fast != null) {
    slow = slow.next;

    if (fast.next !== null) {
      fast = fast.next.next;
    } else {
      return null;
    }

    if (slow === fast) {
      let ptr = head;

      while (ptr !== slow) {
        slow = slow.next;
        ptr = ptr.next;
      }

      return ptr;
    }
  }
  return null;
};
