class MinHeap {
  constructor(arr = []) {
    this.data = [];
    arr.forEach(e => this.data.push(e));
    for (let i = this.__parent(this.data.length - 1); i >= 0; --i) {
      this.__shiftDown(i);
    }
  }

  getSize() {
    return this.data.length;
  }

  isEmpty() {
    return this.data.length === 0;
  }

  add(e) {
    this.data.push(e);
    this.__shiftUp(this.data.length - 1);
  }

  findMin() {
    if (this.data.length === 0) {
      throw new Error('heap is empty.');
    }
    return this.data[0];
  }

  extractMin() {
    const min = this.findMin();
    this.__swap(this.data, 0, this.data.length - 1);
    this.data.length--;
    this.__shiftDown(0);
    return min;
  }

  replace(e) {
    const ret = this.findMin();
    this.data[0] = e;
    this.__shiftDown(0);
    return ret;
  }

  __shiftUp(k) {
    while (k > 0 && this.data[this.__parent(k)] > this.data[k]) {
      this.__swap(this.data, this.__parent(k), k);
      k = this.__parent(k);
    }
  }

  __shiftDown(k) {
    while (this.__leftChild(k) < this.data.length) {
      let j = this.__leftChild(k);
      if (j + 1 < this.data.length && this.data[j + 1] < this.data[j]) {
        ++j;
      }
      if (this.data[k] <= this.data[j]) {
        break;
      }
      this.__swap(this.data, k, j);
      k = j;
    }
  }

  __parent(index) {
    if (index === 0) {
      throw new Error('index 0 does not have a parent!');
    }
    return ((index - 1) / 2) | 0;
  }

  __leftChild(index) {
    return index * 2 + 1;
  }

  __rightChild(index) {
    return index * 2 + 2;
  }

  __swap(arr, x, y) {
    [arr[x], arr[y]] = [arr[y], arr[x]];
  }

}

module.exports = MinHeap;