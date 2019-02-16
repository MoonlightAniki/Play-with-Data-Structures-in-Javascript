// 303. Range Sum Query - Immutable
// https://leetcode.com/problems/range-sum-query-immutable/
/*
Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

Example:
Given nums = [-2, 0, 3, -5, 2, -1]
sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3

Note:
You may assume that the array does not change.
There are many calls to sumRange function.
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
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  return this.segmentTree.query(i, j);
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */

const numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(numArray.sumRange(0, 2));
console.log(numArray.sumRange(2, 5));
console.log(numArray.sumRange(0, 5));
/*
Runtime: 132 ms, faster than 35.99% of JavaScript online submissions for Range Sum Query - Immutable.
Memory Usage: 45.6 MB, less than 100.00% of JavaScript online submissions for Range Sum Query - Immutable.
 */