const LinkedList = require('../04-Linked-List/LinkedList');

class LinkedListSet {
  constructor() {
    this.list = new LinkedList();
  }

  getSize() {
    return this.list.getSize();
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  add(e) {
    if (!this.contains(e)) {
      this.list.addFirst(e);
    }
  }

  contains(e) {
    return this.list.constains(e);
  }

  remove(e) {
    this.list.removeElement(e);
  }
}

module.exports = LinkedListSet;