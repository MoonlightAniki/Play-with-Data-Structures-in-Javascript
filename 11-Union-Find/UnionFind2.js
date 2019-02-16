class UnionFind2 {
  constructor(size) {
    this.parent = [];
    for (let i = 0; i < size; ++i) {
      this.parent[i] = i;
    }
  }

  getSize() {
    return this.parent.length;
  }

  isConnected(p, q) {
    return this.__find(p) === this.__find(q);
  }

  unionElements(p, q) {
    const pRoot = this.__find(p);
    const qRoot = this.__find(q);
    if (pRoot === qRoot) return;
    this.parent[pRoot] = qRoot;
  }

  __find(p) {
    if (p < 0 || p >= this.parent.length) {
      throw new Error('p is out of bound.');
    }
    while (p !== this.parent[p]) {
      p = this.parent[p];
    }
    return p;
  }
}

module.exports = UnionFind2;