const AVLTree = require('./AVLTree');

class AVLSet {
  constructor() {
    this.avl = new AVLTree();
  }

  getSize() {
    return this.avl.getSize();
  }

  isEmpty() {
    this.avl.isEmpty();
  }

  add(e) {
    this.avl.add(e, null);
  }

  contains(e) {
    return this.avl.contains(e);
  }

  remove(e) {
    this.avl.remove(e);
  }
}

module.exports = AVLSet;