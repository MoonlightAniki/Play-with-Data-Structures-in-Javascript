const AVLTree = require('./AVLTree');

class AVLMap {
  constructor() {
    this.avl = new AVLTree();
  }

  getSize() {
    return this.avl.getSize();
  }

  isEmpty() {
    return this.avl.isEmpty();
  }

  add(key, value) {
    this.avl.add(key, value);
  }

  get(key) {
    return this.avl.get(key);
  }

  set(key, newValue) {
    this.avl.set(key, newValue);
  }

  contains(key) {
    return this.avl.contains(key);
  }

  remove(key) {
    return this.avl.remove(key);
  }
}

module.exports = AVLMap;