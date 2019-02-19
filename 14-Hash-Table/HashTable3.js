// 第三版
const upperTol = 10;
const lowerTol = 2;

const capacity = [
  53, 97, 193, 389, 769, 1543, 3079, 6151, 12289, 24593,
  49157, 98317, 196613, 393241, 786433, 1572869, 3145739, 6291469,
  12582917, 25165843, 50331653, 100663319, 201326611, 402653189, 805306457, 1610612741
];

class HashTable {
  constructor() {
    this.capacityIndex = 0;
    this.M = capacity[this.capacityIndex];
    this.size = 0;
    this.hashtable = [];
    for (let i = 0; i < this.M; ++i) {
      this.hashtable.push(new Map());
    }
  }

  __hash(key) {
    return this.__hashCode(key) & 0x7fffffff % this.M;
  }

  // 计算对象的hash值
  __hashCode(obj) {
    let hashCode = 0;
    const str = JSON.stringify(obj);
    for (let i = 0; i < str.length; ++i) {
      hashCode = ((hashCode << 5) - hashCode) + str.charCodeAt(i);
      hashCode &= hashCode;// convert to 32bit integer
    }
    return hashCode;
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  add(key, value) {
    const map = this.hashtable[this.__hash(key)];
    if (map.has(key)) {
      map.set(key, value);
    } else {
      map.set(key, value);
      this.size++;

      // 添加完元素后检查平均负载是否到达上限
      if (this.size >= upperTol * this.M && this.capacityIndex + 1 < capacity.length) {
        this.capacityIndex++;
        this.__resize(capacity[this.capacityIndex]);
      }
    }
  }

  remove(key) {
    const map = this.hashtable[this.__hash(key)];
    let ret = null;
    if (map.has(key)) {
      ret = map.get(key);
      map.delete(key);
      this.size--;

      if (this.size < lowerTol * this.M && this.capacityIndex - 1 >= 0) {
        this.capacityIndex--;
        this.__resize(capacity[this.capacityIndex]);
      }
    }
    return ret;
  }

  set(key, newValue) {
    const map = this.hashtable[this.__hash(key)];
    if (!map.has(key)) {
      throw new Error(`${key} doesn't exist!`);
    }
    map.set(key, newValue);
  }

  contains(key) {
    const map = this.hashtable[this.__hash(key)];
    return map.has(key);
  }

  get(key) {
    const map = this.hashtable[this.__hash(key)];
    return map.get(key);
  }

  __resize(newM) {
    const newHashTable = [];
    for (let i = 0; i < newM; ++i) {
      newHashTable.push(new Map());
    }
    const oldM = this.M;
    this.M = newM;
    for (let i = 0; i < oldM; ++i) {
      for (let [key, value] of this.hashtable[i].entries()) {
        newHashTable[this.__hash(key)].set(key, value);
      }
    }
    this.hashtable = newHashTable;
  }
}

module.exports = HashTable;