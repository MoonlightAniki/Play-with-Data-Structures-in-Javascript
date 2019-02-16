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

/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.sums = [];
  this.data = [];
  this.sums[0] = 0;
  for (let i = 0; i < nums.length; ++i) {
    this.data[i] = nums[i];
    this.sums[i + 1] = this.sums[i] + nums[i];
  }
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (index, val) {
  this.data[index] = val;
  for (let i = index; i < this.data.length; ++i) {
    this.sums[i + 1] = this.sums[i] + this.data[i];
  }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  return this.sums[j + 1] - this.sums[i];
};

const numArray = new NumArray([1, 3, 5]);
console.log(numArray.sumRange(0, 2));
numArray.update(1, 2);
console.log(numArray.sumRange(0, 2));
/*
Runtime: 280 ms, faster than 10.87% of JavaScript online submissions for Range Sum Query - Mutable.
Memory Usage: 45.8 MB, less than 100.00% of JavaScript online submissions for Range Sum Query - Mutable.
 */