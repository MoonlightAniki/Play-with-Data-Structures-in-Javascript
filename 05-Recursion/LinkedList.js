class Node {
  constructor(e, next) {
    this.e = e;
    this.next = next;
  }

  toString() {
    return this.e.toString();
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  add(index, e) {
    if (index < 0 || index > this.size) {
      throw new Error('Add failed, require index >= 0 && index <= size.');
    }
    this.head = this.__add(this.head, index, e);
    this.size++;
  }

  addFirst(e) {
    this.add(0, e);
  }

  addLast(e) {
    this.add(this.size, e);
  }

  __add(node, index, e) {
    if (index === 0) {
      return new Node(e, node);
    }
    node.next = this.__add(node.next, index - 1, e);
    return node;
  }

  get(index) {
    if (index < 0 || index >= this.size) {
      throw new Error('Get failed, require index >= 0 && index < size.');
    }
    return this.__get(this.head, index);
  }

  getFirst() {
    return this.get(0);
  }

  getLast() {
    return this.get(this.size - 1);
  }

  __get(node, index) {
    if (index === 0) {
      return node.e;
    }
    return this.__get(node.next, index - 1);
  }

  set(index, e) {
    if (index < 0 || index >= this.size) {
      throw new Error('Set failed, require index >= 0 && index < size.');
    }
    this.__set(this.head, index, e);
  }

  __set(node, index, e) {
    if (index === 0) {
      node.e = e;
      return;
    }
    this.__set(node.next, index - 1, e);
  }

  contains(e) {
    return this.__contains(this.head, e);
  }

  __contains(node, e) {
    if (!node) return false;
    if (node.e === e) return true;
    return this.__contains(node.next, e);
  }

  remove(index) {
    if (index < 0 || index >= this.size) {
      throw new Error('Remove failed, require index >= 0 && index < size.');
    }
    let ret = this.get(index);
    this.head = this.__remove(this.head, index);
    this.size--;
    return ret;
  }

  removeFirst() {
    return this.remove(0);
  }

  removeLast() {
    return this.remove(this.size - 1);
  }

  __remove(node, index) {
    if (index === 0) {
      return node.next;
    }
    node.next = this.__remove(node.next, index - 1);
    return node;
  }

  removeElement(e) {
    this.__removeElement(this.head, e);
  }

  __removeElement(node, e) {
    if (!node) {
      return node;
    }
    if (node.e === e) {
      this.size--;
      return node.next;
    }
    node.next = this.__removeElement(node.next, e);
    return node;
  }

  removeAll(e) {
    this.__removeAll(this.head, e);
  }

  __removeAll(node, e) {
    if (!node) {
      return node;
    }
    node.next = this.__removeAll(node.next, e);
    if (node.e === e) {
      this.size--;
      return node.next;
    } else {
      return node;
    }
  }

  toString() {
    let res = '';
    for (let cur = this.head; cur; cur = cur.next) {
      res += `${cur.e}->`;
    }
    res += 'NULL';
    return res;
  }
}


const list = new LinkedList();
for (let i = 0; i < 5; ++i) {
  list.addFirst(i);
  console.log(list.toString());
}
list.add(2, 666);
list.add(2, 666);
console.log(list.toString());
list.set(4, 222);
console.log(list.toString());
console.log(list.get(5));
console.log(list.remove(6));
list.removeAll(666);
console.log(list.toString());
list.removeElement(222);
console.log(list.toString());
