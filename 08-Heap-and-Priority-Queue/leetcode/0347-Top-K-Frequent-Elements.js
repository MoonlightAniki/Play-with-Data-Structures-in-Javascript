// 347. Top K Frequent Elements
// https://leetcode.com/problems/top-k-frequent-elements/
/*
Given a non-empty array of integers, return the k most frequent elements.

Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:
Input: nums = [1], k = 1
Output: [1]

Note:
You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
 */

const MinHeap = require('../MinHeap');

class Freq {
  constructor(num, freq) {
    this.num = num;
    this.freq = freq;
  }

  valueOf() {
    return this.freq;
  }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = {};
  nums.forEach(num => {
    map[num] = (map[num] | 0) + 1;
  });
  const heap = new MinHeap();
  Object.keys(map).forEach(num => {
    if (heap.getSize() < k) {
      heap.add(new Freq(num, map[num]));
    } else if (map[num] > heap.findMin().freq) {
      heap.replace(new Freq(num, map[num]));
    }
  });
  const res = [];
  while (!heap.isEmpty()) {
    res.push(parseInt(heap.extractMin().num, 10));
  }
  return res;
};
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
/*
Runtime: 92 ms, faster than 39.81% of JavaScript online submissions for Top K Frequent Elements.
Memory Usage: 37.2 MB, less than 100.00% of JavaScript online submissions for Top K Frequent Elements.
 */