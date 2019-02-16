// 基于rank的优化 + 路径压缩
class UnionFind5 {
  constructor(size) {
    this.parent = [];
    this.rank = [];
    for (let i = 0; i < size; ++i) {
      this.parent[i] = i;
      this.rank[i] = 1;
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
    if (this.rank[pRoot] > this.rank[qRoot]) {
      this.parent[qRoot] = pRoot;
    } else if (this.rank[pRoot] < this.rank[qRoot]) {
      this.parent[pRoot] = qRoot;
    } else {
      this.parent[pRoot] = qRoot;
      this.rank[qRoot]++;
    }
  }

  __find(p) {
    if (p < 0 || p > this.parent.length) {
      throw new Error('p is out of bound.');
    }
    while (p !== this.parent[p]) {
      this.parent[p] = this.parent[this.parent[p]];//路径压缩
      p = this.parent[p];
    }
    return p;
  }
}

module.exports = UnionFind5;