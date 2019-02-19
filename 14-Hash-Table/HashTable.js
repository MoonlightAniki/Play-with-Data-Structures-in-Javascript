// 第一版
class HashTable {
  constructor(M = 97) {
    this.M = M;
    this.size = 0;
    this.hashtable = [];
    for (let i = 0; i < M; ++i) {
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
    }
  }

  remove(key) {
    const map = this.hashtable[this.__hash(key)];
    let ret = null;
    if (map.has(key)) {
      ret = map.get(key);
      map.delete(key);
      this.size--;
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
}

module.exports = HashTable;