// 基于size的优化
class UnionFind3 {
  constructor(size) {
    this.parent = [];
    this.sz = [];
    for (let i = 0; i < size; ++i) {
      this.parent[i] = i;
      this.sz[i] = 1;
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
    if (this.sz[pRoot] <= this.sz[qRoot]) {
      this.parent[pRoot] = qRoot;
      this.sz[qRoot] += this.sz[pRoot];
    } else {
      this.parent[qRoot] = pRoot;
      this.sz[pRoot] += this.sz[qRoot];
    }
  }

  __find(p) {
    if (p < 0 || p > this.parent.length) {
      throw new Error('p is out of bound.');
    }
    while (p !== this.parent[p]) {
      p = this.parent[p];
    }
    return p;
  }
}

module.exports = UnionFind3;