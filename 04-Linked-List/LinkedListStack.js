const LinkedList = require('./LinkedList');

class LinkedListStack {
  constructor() {
    this.list = new LinkedList();
  }

  push(e) {
    this.list.addFirst(e);
  }

  pop() {
    return this.list.removeFirst();
  }

  peek() {
    return this.list.getFirst();
  }

  getSize() {
    return this.list.getSize();
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  toString() {
    let res = 'Stack: top ';
    res += this.list.toString();
    return res;
  }
}

module.exports = LinkedListStack;