class Node {
  constructor(isWord = false) {
    this.isWord = isWord;
    this.next = {};
  }
}

class Trie {
  constructor() {
    this.root = new Node();
    this.size = 0;
  }

  getSize() {
    return this.size;
  }

  add(word) {
    let cur = this.root;
    for (let i = 0; i < word.length; ++i) {
      const c = word[i];
      if (!cur.next[c]) {
        cur.next[c] = new Node();
      }
      cur = cur.next[c];
    }
    if (!cur.isWord) {
      cur.isWord = true;
      this.size++;
    }
  }

  contains(word) {
    let cur = this.root;
    for (let i = 0; i < word.length; ++i) {
      const c = word[i];
      if (!cur.next[c]) {
        return false;
      }
      cur = cur.next[c];
    }
    return cur.isWord;
  }

  isPrefix(prefix) {
    let cur = this.root;
    for (let i = 0; i < prefix.length; ++i) {
      const c = prefix[i];
      if (!cur.next[c]) {
        return false;
      }
      cur = cur.next[c];
    }
    return true;
  }
}

module.exports = Trie;
