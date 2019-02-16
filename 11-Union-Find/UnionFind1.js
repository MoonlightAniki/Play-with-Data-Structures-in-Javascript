// Quick Find
class UnionFind1 {
  constructor(size) {
    this.id = [];
    for (let i = 0; i < size; ++i) {
      this.id[i] = i;
    }
  }

  getSize() {
    this.id.length;
  }

  // 查看元素p和元素q是否在同一集合
  isConnected(p, q) {
    return this.__find(p) === this.__find(q);
  }

  // 将元素p所在的集合与元素q所在的集合合并
  unionElements(p, q) {
    const pID = this.__find(p);
    const qID = this.__find(q);
    if (pID === qID) return;
    for (let i = 0; i < this.id.length; ++i) {
      if (this.id[i] === pID) {
        this.id[i] = qID;
      }
    }
  }

  // 查找元素p所对应的集合的编号
  __find(p) {
    if (p < 0 || p >= this.id.length) {
      throw new Error('p is out of bound.');
    }
    return this.id[p];
  }
}

module.exports = UnionFind1;