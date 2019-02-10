const Array = require('../02-Arrays/Array');

class ArrayStack {
  constructor(capacity) {
    this.array = new Array(capacity);
  }

  push(e) {
    this.array.addLast(e);
  }

  pop() {
    return this.array.removeLast();
  }

  peek() {
    return this.array.getLast();
  }

  isEmpty() {
    return this.array.isEmpty();
  }

  getSize() {
    return this.array.getSize();
  }

  getCapacity() {
    return this.array.getCapacity();
  }

  toString() {
    let res = 'Stack: ';
    res += '[';
    for (let i = 0; i < this.array.getSize(); ++i) {
      res += this.array.get(i);
      if (i !== this.array.getSize() - 1) {
        res += ', ';
      }
    }
    res += '] top';
    return res;
  }
}

module.exports = ArrayStack;
