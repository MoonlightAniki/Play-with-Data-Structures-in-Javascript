// 677. Map Sum Pairs
// https://leetcode.com/problems/map-sum-pairs/
/*
Implement a MapSum class with insert, and sum methods.
For the method insert, you'll be given a pair of (string, integer). The string represents the key and the integer represents
the value. If the key already existed, then the original key-value pair will be overridden to the new one.
For the method sum, you'll be given a string representing the prefix, and you need to return the sum of all the pairs' value
whose key starts with the prefix.

Example 1:
Input: insert("apple", 3), Output: Null
Input: sum("ap"), Output: 3
Input: insert("app", 2), Output: Null
Input: sum("ap"), Output: 5
 */

function Node() {
  this.val = 0;
  this.next = {};
}


/**
 * Initialize your data structure here.
 */
var MapSum = function () {
  this.root = new Node();
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {
  let cur = this.root;
  for (let c of key) {
    if (!cur.next[c]) {
      cur.next[c] = new Node();
    }
    cur = cur.next[c];
  }
  cur.val = val;
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {
  let cur = this.root;
  for (let c of prefix) {
    if (!cur.next[c]) {
      return 0;
    }
    cur = cur.next[c];
  }
  return this.__sum(cur);
};

MapSum.prototype.__sum = function (node) {
  let res = node.val;
  for (let key of Object.keys(node.next)) {
    res += this.__sum(node.next[key]);
  }
  return res;
};
/*
Runtime: 76 ms, faster than 28.89% of JavaScript online submissions for Map Sum Pairs.
Memory Usage: 36 MB, less than 100.00% of JavaScript online submissions for Map Sum Pairs.
 */