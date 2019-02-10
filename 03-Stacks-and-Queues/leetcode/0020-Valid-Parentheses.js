// 20. Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/
/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:
Input: "()"
Output: true

Example 2:
Input: "()[]{}"
Output: true

Example 3:
Input: "(]"
Output: false

Example 4:
Input: "([)]"
Output: false

Example 5:
Input: "{[]}"
Output: true
 */


const Stack = require('../ArrayStack');

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s === null || s === undefined) return false;
  if (s === '') return true;
  if (s.length % 2) return false;
  const stack = new Stack();
  for (let ch of s) {
    if (ch === '(' || ch === '[' || ch === '{') {
      stack.push(ch);
    } else {
      if (stack.isEmpty()) return false;
      let top = stack.pop();
      if (top === '(' && ch !== ')') return false;
      if (top === '[' && ch !== ']') return false;
      if (top === '{' && ch !== '}') return false;
    }
  }
  return stack.isEmpty();
};

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
console.log(isValid('([)]'));
console.log(isValid('{[]}'));
/*
Runtime: 76 ms, faster than 23.61% of JavaScript online submissions for Valid Parentheses.
Memory Usage: 15.5 MB, less than 8.31% of JavaScript online submissions for Valid Parentheses.
 */