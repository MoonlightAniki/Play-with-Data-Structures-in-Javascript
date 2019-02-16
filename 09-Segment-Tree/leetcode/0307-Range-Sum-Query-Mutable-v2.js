// 307. Range Sum Query - Mutable
// https://leetcode.com/problems/range-sum-query-mutable/
/*
Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.
The update(i, val) function modifies nums by updating the element at index i to val.

Example:
Given nums = [1, 3, 5]
sumRange(0, 2) -> 9
update(1, 2)
sumRange(0, 2) -> 8

Note:
The array is only modifiable by the update function.
You may assume the number of calls to update and sumRange function is distributed evenly.
 */

const SegmentTree = require('../SegmentTree2');

/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.segmentTree = new SegmentTree(nums, {
    merge: (a, b) => a + b
  });
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (index, val) {
  this.segmentTree.set(index, val);
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  return this.segmentTree.query(i, j);
};

const numArray = new NumArray([1, 3, 5]);
console.log(numArray.sumRange(0, 2));
numArray.update(1, 2);
console.log(numArray.sumRange(0, 2));
/*
Runtime: 156 ms, faster than 47.83% of JavaScript online submissions for Range Sum Query - Mutable.
Memory Usage: 46.7 MB, less than 100.00% of JavaScript online submissions for Range Sum Query - Mutable.
 */