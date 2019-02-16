// 基于rank的优化 + 路径压缩
class UnionFind6 {
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
    if (p !== this.parent[p]) {
      this.parent[p] = this.__find(this.parent[p]);//路径压缩，使用递归算法使得所有子节点都直接指向根节点
    }
    return this.parent[p];
  }
}

module.exports = UnionFind6;