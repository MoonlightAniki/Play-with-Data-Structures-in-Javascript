// 211. Add and Search Word - Data structure design
// https://leetcode.com/problems/add-and-search-word-data-structure-design/
/*
Design a data structure that supports the following two operations:
void addWord(word)
bool search(word)
search(word) can search a literal word or a regular expression string containing only letters a-z or .. A . means it can represent any one letter.

Example:
addWord("bad")
addWord("dad")
addWord("mad")
search("pad") -> false
search("bad") -> true
search(".ad") -> true
search("b..") -> true

Note:
You may assume that all words are consist of lowercase letters a-z.
 */

function Node() {
  this.isWord = false;
  this.next = {};
}

/**
 * Initialize your data structure here.
 */
var WordDictionary = function () {
  this.root = new Node();
};

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
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
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  return this.__search(this.root, word, 0);
};

WordDictionary.prototype.__search = function (node, word, index) {
  if (index === word.length) {
    return node.isWord;
  }
  if (word[index] === '.') {
    for (let key of Object.keys(node.next)) {
      if (this.__search(node.next[key], word, index + 1)) {
        return true;
      }
    }
    return false;
  } else {
    if (!node.next[word[index]]) {
      return false;
    } else {
      return this.__search(node.next[word[index]], word, index + 1);
    }
  }
};

const dict = new WordDictionary();
dict.addWord("bad");
dict.addWord("dad");
dict.addWord("mad");
console.log(dict.search("pad"));//false
console.log(dict.search("bad"));//true
console.log(dict.search(".ad"));//true
console.log(dict.search("b.."));//true
/*
Runtime: 280 ms, faster than 54.47% of JavaScript online submissions for Add and Search Word - Data structure design.
Memory Usage: 68.9 MB, less than 100.00% of JavaScript online submissions for Add and Search Word - Data structure design.
 */