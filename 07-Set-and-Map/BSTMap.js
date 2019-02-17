class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
  }

  toString() {
    return `${this.key} : ${this.value}`;
  }
}

class BSTMap {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  __getNode(node, key) {
    if (!node) {
      return null;
    }
    if (key === node.key) {
      return node;
    } else if (key < node.key) {
      return this.__getNode(node.left, key);
    } else {
      return this.__getNode(node.right, key);
    }
  }

  get(key) {
    let node = this.__getNode(this.root, key);
    return node ? node.value : null;
  }

  contains(key) {
    return !!this.__getNode(this.root, key);
  }

  add(key, value) {
    this.root = this.__add(this.root, key, value);
  }

  __add(node, key, value) {
    if (!node) {
      this.size++;
      return new Node(key, value);
    }
    if (key === node.key) {
      node.value = value;
    } else if (key < node.key) {
      node.left = this.__add(node.left, key, value);
    } else {
      node.right = this.__add(node.right, key, value);
    }
    return node;
  }

  set(key, newValue) {
    let node = this.__getNode(this.root, key);
    if (!node) {
      throw new Error(`${key} doesn't exist`);
    }
    node.value = newValue;
  }

  remove(key) {
    let node = this.__getNode(this.root, key);
    if (node) {
      this.root = this.__remove(this.root, key);
      return node.value;
    } else {
      return null;
    }
  }

  __remove(node, key) {
    if (!node) {
      return node;
    }
    if (key < node.key) {
      node.left = this.__remove(node.left, key);
      return node;
    } else if (key > node.key) {
      node.right = this.__remove(node.right, key);
      return node;
    } else {
      if (!node.left) {
        let rightNode = node.right;
        node.right = null;
        this.size--;
        return rightNode;
      }
      if (!node.right) {
        let leftNode = node.left;
        node.left = null;
        this.size--;
        return leftNode;
      }
      let successor = this.__maximum(node.left);
      successor.left = this.__remove(node.left, successor.key);
      successor.right = node.right;
      node.left = node.right = null;
      return successor;
    }
  }

  __maximum(node) {
    if (!node.right) {
      return node;
    }
    return this.__maximum(node.right);
  }
}

module.exports = BSTMap;