const Array = require('../02-Arrays/Array');

class ArrayQueue {
  constructor(capacity) {
    this.array = new Array(capacity);
  }

  enqueue(e) {
    this.array.addLast(e);
  }

  dequeue() {
    return this.array.removeFirst();
  }

  getFront() {
    return this.array.getFirst();
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
    let res = 'Queue: ';
    res += 'front [';
    for (let i = 0; i < this.array.getSize(); ++i) {
      res += this.array.get(i);
      if (i !== this.array.getSize() - 1) {
        res += ', ';
      }
    }
    res += '] tail';
    return res;
  }
}

module.exports = ArrayQueue;