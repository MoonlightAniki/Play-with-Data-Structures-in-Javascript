class SegmentTree {
  constructor(arr = [], merger) {
    this.merger = merger;
    this.data = [];
    arr.forEach(e => this.data.push(e));

    this.tree = [];
    this.tree.length = this.data.length * 4;
    this.__buildSegmentTree(0, 0, this.data.length - 1);
  }

  getSize() {
    return this.data.length;
  }

  get(index) {
    if (index < 0 || index >= this.data.length) {
      throw new Error('index is illegal.');
    }
    return this.data[index];
  }

  query(queryL, queryR) {
    if (queryL < 0 || queryR >= this.data.length || queryL > queryR) {
      throw new Error('params is illegal.');
    }
    return this.__query(0, 0, this.data.length - 1, queryL, queryR);
  }

  set(index, e) {
    if (index < 0 || index >= this.data.length) {
      throw new Error('index is illegal.');
    }
    this.__set(0, 0, this.data.length - 1, index, e);
  }

  toString() {
    let res = '[';
    for (let i = 0; i < this.tree.length; ++i) {
      res += this.tree[i] === undefined ? 'null' : this.tree[i];
      if (i !== this.tree.length - 1) {
        res += ', ';
      }
    }
    res += ']';
    return res;
  }

  // 返回完全二叉树的数组表示中，一个索引所表示的元素的左孩子节点的索引
  __leftChild(index) {
    return index * 2 + 1;
  }

  // 返回完全二叉树的数组表示中，一个索引所表示的元素的右孩子节点的索引
  __rightChild(index) {
    return index * 2 + 2;
  }

  // 在treeIndex的位置创建表示区间[l...r]的线段树
  __buildSegmentTree(treeIndex, l, r) {
    if (l === r) {
      this.tree[treeIndex] = this.data[l];
      return;
    }
    const leftTreeIndex = this.__leftChild(treeIndex);
    const rightTreeIndex = this.__rightChild(treeIndex);
    const mid = l + ((r - l) / 2) | 0;
    // [l...mid], [mid+1...r]
    this.__buildSegmentTree(leftTreeIndex, l, mid);
    this.__buildSegmentTree(rightTreeIndex, mid + 1, r);
    this.tree[treeIndex] = this.merger.merge(this.tree[leftTreeIndex], this.tree[rightTreeIndex]);
  }

  // 在以treeIndex为根的线段树中[l...r]的范围里，搜索区间[queryL...queryR]的值
  __query(treeIndex, l, r, queryL, queryR) {
    if (l === queryL && r === queryR) {
      return this.tree[treeIndex];
    }
    const mid = l + ((r - l) / 2) | 0;
    const leftChildIndex = this.__leftChild(treeIndex);
    const rightChildIndex = this.__rightChild(treeIndex);
    if (queryL >= mid + 1) {
      return this.__query(rightChildIndex, mid + 1, r, queryL, queryR);
    } else if (queryR <= mid) {
      return this.__query(leftChildIndex, l, mid, queryL, queryR);
    } else {
      const leftResult = this.__query(leftChildIndex, l, mid, queryL, mid);
      const rightResult = this.__query(rightChildIndex, mid + 1, r, mid + 1, queryR);
      return this.merger.merge(leftResult, rightResult);
    }
  }

  __set(treeIndex, l, r, index, e) {
    if (l === r) {
      this.tree[index] = e;
      return;
    }
    const mid = l + ((r - l) / 2) | 0;
    const leftChildIndex = this.__leftChild(treeIndex);
    const rightChildIndex = this.__rightChild(treeIndex);
    if (index >= mid + 1) {
      this.__set(rightChildIndex, mid + 1, r, index, e);
    } else {// index <= mid
      this.__set(leftChildIndex, l, mid, index, e);
    }
    this.tree[treeIndex] = this.merger.merge(this.tree[leftChildIndex], this.tree[rightChildIndex]);
  }
}

module.exports = SegmentTree;