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
    this.dummyHead = new Node();
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
    let prev = this.dummyHead;
    for (let i = 0; i < index; ++i) {
      prev = prev.next;
    }
    prev.next = new Node(e, prev.next);
    this.size++;
  }

  addFirst(e) {
    this.add(0, e);
  }

  addLast(e) {
    this.add(this.size, e);
  }

  get(index) {
    if (index < 0 || index >= this.size) {
      throw new Error('Get failed, require index >= 0 && index < size.');
    }
    let cur = this.dummyHead.next;
    for (let i = 0; i < index; ++i) {
      cur = cur.next;
    }
    return cur.e;
  }

  getFirst() {
    return this.get(0);
  }

  getLast() {
    return this.get(this.size - 1);
  }

  set(index, e) {
    if (index < 0 || index >= this.size) {
      throw new Error('Set failed, require index >= 0 && index < size.');
    }
    let cur = this.dummyHead.next;
    for (let i = 0; i < index; ++i) {
      cur = cur.next;
    }
    cur.e = e;
  }

  constains(e) {
    for (let cur = this.dummyHead.next; cur; cur = cur.next) {
      if (cur.e === e) {
        return true;
      }
    }
    return false;
  }

  remove(index) {
    if (index < 0 || index >= this.size) {
      throw new Error('Remove failed, require index >= 0 && index < size.');
    }
    let prev = this.dummyHead;
    for (let i = 0; i < index; ++i) {
      prev = prev.next;
    }
    let delNode = prev.next;
    prev.next = delNode.next;
    delNode.next = null;
    this.size--;
    return delNode.e;
  }

  removeFirst() {
    return this.remove(0);
  }

  removeLast() {
    return this.remove(this.size - 1);
  }

  removeElement(e) {
    for (let prev = this.dummyHead; prev.next; prev = prev.next) {
      if (prev.next.e === e) {
        let delNode = prev.next;
        prev.next = delNode.next;
        delNode.next = null;
        this.size--;
        return true;
      }
    }
    return false;
  }

  removeAll(e) {
    let res = false;
    for (let prev = this.dummyHead; prev.next;) {
      if (prev.next.e === e) {
        let delNode = prev.next;
        prev.next = delNode.next;
        delNode.next = null;
        this.size--;
        res = true;
      } else {
        prev = prev.next;
      }
    }
    return res;
  }

  toString() {
    let res = '';
    let cur = this.dummyHead.next;
    while (cur) {
      res += `${cur.e}->`;
      cur = cur.next;
    }
    res += 'NULL';
    return res;
  }
}

module.exports = LinkedList;