// 208. Implement Trie (Prefix Tree)
// https://leetcode.com/problems/implement-trie-prefix-tree/
/*
Implement a trie with insert, search, and startsWith methods.

Example:
Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");
trie.search("app");     // returns true

Note:
You may assume that all inputs are consist of lowercase letters a-z.
All inputs are guaranteed to be non-empty strings.
 */

class Node {
  constructor() {
    this.isWord = false;
    this.next = {};
  }
}


/**
 * Initialize your data structure here.
 */
var Trie = function () {
  this.root = new Node();
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let cur = this.root;
  for (let c of word) {
    if (!cur.next[c]) {
      cur.next[c] = new Node();
    }
    cur = cur.next[c];
  }
  cur.isWord = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let cur = this.root;
  for (let c of word) {
    if (!cur.next[c]) {
      return false;
    }
    cur = cur.next[c];
  }
  return cur.isWord;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let cur = this.root;
  for (let c of prefix) {
    if (!cur.next[c]) {
      return false;
    }
    cur = cur.next[c];
  }
  return true;
};


const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"));  // returns true
console.log(trie.search("app"));    // returns false
console.log(trie.startsWith("app")); // returns true
trie.insert("app");
console.log(trie.search("app"));     // returns true
/*
Runtime: 244 ms, faster than 29.77% of JavaScript online submissions for Implement Trie (Prefix Tree).
Memory Usage: 62.1 MB, less than 100.00% of JavaScript online submissions for Implement Trie (Prefix Tree).
 */