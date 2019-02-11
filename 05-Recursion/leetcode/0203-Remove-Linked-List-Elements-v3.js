// 203. Remove Linked List Elements
// https://leetcode.com/problems/remove-linked-list-elements/
/*
Remove all elements from a linked list of integers that have value val.

Example:
Input:  1->2->6->3->4->5->6, val = 6
Output: 1->2->3->4->5
 */

// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

function createListNode(arr) {
  if (!arr || !arr.length) {
    return null;
  }
  let dummyHead = new ListNode();
  let prev = dummyHead;
  for (let val of arr) {
    prev.next = new ListNode(val);
    prev = prev.next;
  }
  return dummyHead.next;
}

function printListNode(head) {
  let res = '';
  for (let cur = head; cur; cur = cur.next) {
    res += `${cur.val}->`;
  }
  res += 'NULL';
  console.log(res);
}

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let dummyHead = new ListNode();
  dummyHead.next = head;
  let prev = dummyHead;
  while (prev.next) {
    if (prev.next.val === val) {
      prev.next = prev.next.next;
    } else {
      prev = prev.next;
    }
  }
  return dummyHead.next;
};

let arr = [1, 2, 6, 3, 4, 5, 6];
let head = createListNode(arr);
printListNode(head);
head = removeElements(head, 6);
printListNode(head);
/*
Runtime: 100 ms, faster than 13.07% of JavaScript online submissions for Remove Linked List Elements.
Memory Usage: 18.5 MB, less than 37.16% of JavaScript online submissions for Remove Linked List Elements.
 */