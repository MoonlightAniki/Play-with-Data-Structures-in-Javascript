class Node {
  constructor(key, value, next) {
    this.key = key;
    this.value = value;
    this.next = next;
  }

  toString() {
    return `${this.key} : ${this.value}`;
  }
}

class LinkedListMap {
  constructor() {
    this.dummyHead = new Node();
    this.size = 0;
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  __getNode(key) {
    for (let cur = this.dummyHead.next; cur; cur = cur.next) {
      if (cur.key === key) {
        return cur;
      }
    }
    return null;
  }

  get(key) {
    let node = this.__getNode(key);
    return node ? node.value : null;
  }

  contains(key) {
    return !!this.__getNode(key);
  }

  add(key, value) {
    let node = this.__getNode(key);
    if (!node) {
      this.dummyHead.next = new Node(key, value, this.dummyHead.next);
      this.size++;
    } else {
      node.value = value;
    }
  }

  set(key, newValue) {
    let node = this.__getNode(key);
    if (!node) {
      throw new Error(`${key} doesn't exist!`);
    }
    node.value = newValue;
  }

  remove(key) {
    let prev = this.dummyHead;
    while (prev.next) {
      if (prev.next.key === key) {
        let delNode = prev.next;
        prev.next = delNode.next;
        delNode.next = null;
        this.size--;
        return delNode.value;
      } else {
        prev = prev.next;
      }
    }
    return null;
  }
}

module.exports = LinkedListMap;