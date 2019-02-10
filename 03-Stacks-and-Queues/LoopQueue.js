class LoopQueue {
  constructor(capacity = 10) {
    this.data = [];
    this.data.length = capacity + 1;
    this.front = 0;
    this.tail = 0;
    this.size = 0;
  }

  getCapacity() {
    return this.data.length - 1;
  }

  isEmpty() {
    return this.front === this.tail;
  }

  getSize() {
    return this.size;
  }

  enqueue(e) {
    if ((this.tail + 1) % this.data.length === this.front) {
      this.__resize(2 * this.getCapacity());
    }
    this.data[this.tail] = e;
    this.tail = (this.tail + 1) % this.data.length;
    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error('Cannot dequeue from an empty queue!');
    }
    let ret = this.data[this.front];
    this.data[this.front] = undefined;
    this.front = (this.front + 1) % this.data.length;
    this.size--;
    if (this.size === ((this.getCapacity() / 4) | 0) && ((this.getCapacity() / 2) | 0) !== 0) {
      this.__resize((this.getCapacity() / 2) | 0);
    }
    return ret;
  }

  getFront() {
    if (this.isEmpty()) {
      throw new Error('Queue is empty.');
    }
    return this.data[this.front];
  }

  __resize(newCapacity) {
    const newData = [];
    newData.length = newCapacity + 1;
    for (let i = 0; i < this.size; ++i) {
      newData[i] = this.data[(this.front + i) % this.data.length];
    }
    this.data = newData;
    this.front = 0;
    this.tail = this.size;
  }

  toString() {
    let res = '';
    res += `Queue: size = ${this.size}, capacity = ${this.getCapacity()}\n`;
    res += 'front [';
    for (let i = 0; i < this.size; ++i) {
      res += this.data[(this.front + i) % this.data.length];
      if (i !== this.size - 1) {
        res += ', ';
      }
    }
    res += '] tail';
    return res;
  }
}

module.exports = LoopQueue;