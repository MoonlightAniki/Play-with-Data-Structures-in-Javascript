// 使用节点实现线段树
class Node {
  constructor(start, end) {
    this.start = start;
    this.end = end;
    this.left = null;// 左子树
    this.right = null;// 右子树
    this.value = null;
  }
}

class SegmentTree2 {
  constructor(arr, merger) {
    this.merger = merger;
    if (!arr || !arr.length) return;
    this.root = this.__buildSegmentTree(arr, 0, arr.length - 1);
  }

  query(queryL, queryR) {
    if (!this.root || queryL < this.root.start || queryR > this.root.end || queryL > queryR) {
      throw new Error('illegal parameters.');
    }
    return this.__query(this.root, queryL, queryR);
  }

  set(index, value) {
    if (!this.root || index < this.root.start || index > this.root.end) {
      throw new Error('index is illegal.');
    }
    this.__set(this.root, index, value);
  }

  __set(node, index, value) {
    if (node.start === node.end) {
      node.value = value;
      return;
    }
    const mid = node.start + ((node.end - node.start) / 2) | 0;
    if (index <= mid) {
      this.__set(node.left, index, value);
    } else {
      this.__set(node.right, index, value);
    }
    node.value = this.merger.merge(node.left.value, node.right.value);
  }

  __query(node, queryL, queryR) {
    if (node.start === queryL && node.end === queryR) {
      return node.value;
    }
    const mid = node.start + ((node.end - node.start) / 2) | 0;
    if (queryL >= mid + 1) {
      return this.__query(node.right, queryL, queryR);
    } else if (queryR <= mid) {
      return this.__query(node.left, queryL, queryR);
    } else {
      const leftResult = this.__query(node.left, queryL, mid);
      const rightResult = this.__query(node.right, mid + 1, queryR);
      return this.merger.merge(leftResult, rightResult);
    }
  }

  __buildSegmentTree(arr, start, end) {
    if (start === end) {
      const node = new Node(start, end);
      node.value = arr[start];
      return node;
    }
    const node = new Node(start, end);
    const mid = start + ((end - start) / 2) | 0;
    node.left = this.__buildSegmentTree(arr, start, mid);
    node.right = this.__buildSegmentTree(arr, mid + 1, end);
    node.value = this.merger.merge(node.left.value, node.right.value);
    return node;
  }
}

module.exports = SegmentTree2;