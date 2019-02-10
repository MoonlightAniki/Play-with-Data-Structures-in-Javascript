class Node {
  constructor(e, next) {
    this.e = e;
    this.next = next;
  }

  toString() {
    return this.e.toString();
  }
}

class LinkedListQueue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(e) {
    if (!this.size) {
      this.head = this.tail = new Node(e);
      this.size++;
    } else {
      this.tail.next = new Node(e);
      this.tail = this.tail.next;
      this.size++;
    }
  }

  dequeue() {
    if (!this.size) {
      throw new Error('Dequeue failed. LinkedListQueue is empty.');
    }
    let ret = this.head.e;
    if (this.size === 1) {
      this.head = this.tail = null;
      this.size--;
    } else {
      let delNode = this.head;
      this.head = delNode.next;
      delNode.next = null;
      this.size--;
    }
    return ret;
  }

  getFront() {
    if (!this.size) {
      throw new Error('getFront failed, LinkedListQueue is empty.');
    }
    return this.head.e;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  toString() {
    let res = 'LinkedListQueue: front ';
    for (let cur = this.head; cur; cur = cur.next) {
      res += `${cur.e}->`
    }
    res += 'NULL tail';
    return res;
  }
}

module.exports = LinkedListQueue;