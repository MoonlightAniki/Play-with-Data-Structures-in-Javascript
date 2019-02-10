class Array {
  // 构造函数，传入数组的容量capacity构造Array，默认容量等于10
  constructor(capacity = 10) {
    this.data = [];
    this.data.length = capacity;
    this.size = 0;
  }

  // 获取数组的元素个数
  getSize() {
    return this.size;
  };

  // 获取数组的容量
  getCapacity() {
    return this.data.length;
  };

  // 返回数组是否为空
  isEmpty() {
    return this.size === 0;
  };

  // 在数组末尾添加元素e
  addLast(e) {
    this.add(this.size, e);
  };

  // 在数组首部添加元素e
  addFirst(e) {
    this.add(0, e);
  };

  // 向数组指定索引index添加元素e
  add(index, e) {
    if (index < 0 || index > this.size) {
      throw new Error('Add failed, require index >= 0 && index <= size.');
    }
    if (this.size === this.data.length) {
      this.__resize(2 * this.data.length);
    }
    for (let i = this.size; i > index; --i) {
      this.data[i] = this.data[i - 1];
    }
    this.data[index] = e;
    this.size++;
  };

  // 返回指定索引index处的元素
  get(index) {
    if (index < 0 || index >= this.size) {
      throw new Error('Get failed. Index is illegal.');
    }
    return this.data[index];
  };

  getFirst() {
    return this.get(0);
  }

  getLast() {
    return this.get(this.size - 1);
  }

  // 更新索引index处元素的值
  set(index, e) {
    if (index < 0 || index >= this.size) {
      throw new Error('Set failed. Index is illegal.');
    }
    this.data[index] = e;
  }

  // 返回数组中是否包含元素e
  constains(e) {
    for (let i = 0; i < this.size; ++i) {
      if (this.data[i] === e) {
        return true;
      }
    }
    return false;
  }

  // 返回元素e在数组中的索引，不存在返回-1
  find(e) {
    for (let i = 0; i < this.size; ++i) {
      if (this.data[i] === e) {
        return i;
      }
    }
    return -1;
  }

  // 删除索引index处的元素，并返回该元素
  remove(index) {
    if (index < 0 || index >= this.size) {
      throw new Error('Remove failed. Index is illegal.');
    }
    let ret = this.data[index];
    for (let i = index; i + 1 < this.size; ++i) {
      this.data[i] = this.data[i + 1];
    }
    this.size--;
    this.data[this.size] = undefined;// or null ?
    if (this.size === ((this.data.length / 4) | 0) && ((this.data.length / 2) | 0) > 0) {
      this.__resize((this.data.length / 2) | 0)
    }
    return ret;
  }

  // 删除数组首部的元素
  removeFirst() {
    return this.remove(0);
  }

  // 删除数组尾部的元素
  removeLast() {
    return this.remove(this.size - 1);
  }

  // 删除数组中第一个等于e的元素
  removeElement(e) {
    let index = this.find(e);
    if (index === -1) {
      return false;
    }
    this.remove(index);
    return true;
  }

  // 删除数组中所有等于e的元素
  removeAll(e) {
    let res = false;
    let index = -1;
    while ((index = this.find(e)) !== -1) {
      this.remove(index);
      res = true;
    }
    return res;
  }

  __resize(newCapacity) {
    const newData = [];
    newData.length = newCapacity;
    for (let i = 0; i < this.size; ++i) {
      newData[i] = this.data[i];
    }
    this.data = newData;
  }

  toString() {
    let res = '';
    res += `Array: size = ${this.size}, capacity = ${this.data.length}\n`;
    res += '[';
    for (let i = 0; i < this.size; ++i) {
      res += this.data[i];
      if (i !== this.size - 1) {
        res += ', ';
      }
    }
    res += ']';
    return res;
  };

}

module.exports = Array;


