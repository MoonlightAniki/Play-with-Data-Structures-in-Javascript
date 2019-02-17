const RED = true;
const BLACK = false;

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
    this.color = RED;//节点默认为红色
  }
}

class RBTree {
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
    if (key < node.key) {
      return this.__getNode(node.left, key);
    } else if (key > node.right) {
      return this.__getNode(node.right, key);
    } else {
      return node;
    }
  }

  contains(key) {
    return !!this.__getNode(this.root, key);
  }

  add(key, value) {
    this.root = this.__add(this.root, key, value);
    this.root.color = BLACK;//最终根节点为黑色节点
  }

  get(key) {
    const node = this.__getNode(this.root, key);
    return node ? node.value : null;
  }

  set(key, newValue) {
    const node = this.__getNode(this.root, key);
    if (!node) {
      throw new Error(`${key} doesn't exist!`);
    }
    node.value = newValue;
  }

  __add(node, key, value) {
    if (!node) {
      this.size++;
      return new Node(key, value);
    }
    if (key < node.key) {
      node.left = this.__add(node.left, key, value);
    } else if (key > node.key) {
      node.right = this.__add(node.right, key, value);
    } else {
      node.value = value;
    }

    // 检查是否需要左旋
    if (!this.__isRed(node.left) && this.__isRed(node.right)) {
      node = this.__leftRotate(node);
    }

    // 检查是否需要右旋
    if (this.__isRed(node.left) && this.__isRed(node.left.left)) {
      node = this.__rightRotate(node);
    }

    // 检查是否需要颜色翻转
    if (this.__isRed(node.left) && this.__isRed(node.right)) {
      this.__flipColors(node);
    }
    return node;
  }

  __isRed(node) {
    return node ? node.color === RED : false;
  }

  // 向左旋转
  // T1 < node < T2 < x < T3
  //         node                                    x
  //        /    \        向左旋转(node)           /     \
  //       T1    x     ----------------->       node     T3
  //           /   \                           /    \
  //          T2   T3                         T1    T2
  __leftRotate(node) {
    const x = node.right;

    // 向左旋转
    node.right = x.left;
    x.left = node;

    // 颜色维护
    x.color = node.color;
    node.color = RED;

    return x;
  }


  // 向右旋转
  // T1 < x < T2 < node < T3
  //         node                                    x
  //        /    \        向右旋转(node)            /   \
  //       x     T3   ------------------->       T1     node
  //     /   \                                         /    \
  //    T1    T2                                      T2     T3
  __rightRotate(node) {
    const x = node.left;

    // 向右旋转
    node.left = x.right;
    x.right = node;

    // 颜色维护
    x.color = node.color;
    node.color = RED;

    return x;
  }

  // 颜色翻转
  __flipColors(node) {
    node.color = RED;
    node.left.color = BLACK;
    node.right.color = BLACK;
  }
}