class MaxHeap {
  constructor() {
    this.data = [];
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

  findMax() {
    if (this.data.length === 0) {
      throw new Error('heap is empty.');
    }
    return this.data[0];
  }

  extractMax() {
    const max = this.findMax();
    this.__swap(this.data, 0, this.data.length - 1);
    this.data.length = this.data.length - 1;
    this.__shiftDown(0);
    return max;
  }

  __shiftUp(k) {
    while (k > 0 && this.data[this.__parent(k)] < this.data[k]) {// 存在父节点并且父节点的值小于当前节点的值
      this.__swap(this.data, this.__parent(k), k);
      k = this.__parent(k);
    }
  }

  __shiftDown(k) {
    while (this.__leftChild(k) < this.data.length) {// 存在左孩子
      let j = this.__leftChild(k);
      if (j + 1 < this.data.length && this.data[j + 1] > this.data[j]) {// 存在右孩子并且右孩子大于左孩子
        ++j;
      }
      if (this.data >= this.data[j]) {
        break;
      }
      this.__swap(this.data, k, j);
      k = j;
    }
  }

  // 返回完全二叉树的数组表示中，一个索引表示的元素的父节点的索引
  __parent(index) {
    if (index === 0) {
      throw new Error('index 0 doesn\'t have a parent.');
    }
    return ((index - 1) / 2) | 0;
  }

  //返回完全二叉树的数组表示中，一个索引表示的元素的左孩子节点的索引
  __leftChild(index) {
    return index * 2 + 1;
  }

  //返回完全二叉树的数组表示中，一个索引表示的元素的右孩子节点的索引
  __rightChild(index) {
    return index * 2 + 2;
  }

  __swap(arr, x, y) {
    [arr[x], arr[y]] = [arr[y], arr[x]];
  }
}
