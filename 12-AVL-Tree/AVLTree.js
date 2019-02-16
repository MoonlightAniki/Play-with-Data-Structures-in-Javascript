class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

class AVLTree {
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

  // 获取节点node的高度
  __getHeight(node) {
    return node ? node.height : 0;
  }

  // 获取节点的平衡因子
  __getBalanceFactor(node) {
    return node ? this.__getHeight(node.left) - this.__getHeight(node.right) : 0;
  }

  // 判断一棵二叉树是否为二分搜索树
  __isBST(node) {
    const keys = [];
    this.__inorder(node, keys);
    for (let i = 0; i + 1 < keys.length; ++i) {
      if (keys[i] >= keys[i + 1]) {
        return false;
      }
    }
    return true;
  }

  // 判断一棵二叉树是否为平衡二叉树
  __isBalanced(node) {
    if (!node) {
      return true;
    }
    return Math.abs(this.__getBalanceFactor(node)) <= 1 && this.__isBalanced(node.left) && this.__isBalanced(node.right);
  }

  // 对节点y进行右旋转操作，返回旋转后的新的根节点x
  // T1 < z < T2 < x < T3 < y < T4
  //         y                               x
  //       /  \                            /   \
  //      x   T4      向右旋转(y)          z     y
  //    /  \        -------------->     /  \   / \
  //   z   T3                          T1  T2 T3 T4
  //  / \
  // T1 T2
  __rightRotate(y) {
    const x = y.left;
    const T3 = x.right;

    // 向右旋转过程
    x.right = y;
    y.left = T3;

    // 更新节点height(先更新y再更新x，因为x的高度与y的高度有关)
    y.height = 1 + Math.max(this.__getHeight(y.left), this.__getHeight(y.right));
    x.height = 1 + Math.max(this.__getHeight(x.left), this.__getHeight(x.right));

    return x;
  }

  // 对节点y进行左旋转操作，返回旋转后的新的根节点x
  // T1 < y < T2 < x < T3 < z < T4
  //      y                                          x
  //    /   \                                      /   \
  //   T1    x             向左旋转(y)             y     z
  //       /   \     --------------------->     /  \   / \
  //      T2    z                              T1  T2 T3 T4
  //          /   \
  //         T3   T4
  __leftRotate(y) {
    const x = y.right;
    const T2 = x.left;

    // 向左旋转过程
    x.left = y;
    y.right = T2;

    // 更新节点高度
    y.height = 1 + Math.max(this.__getHeight(y.left), this.__getHeight(y.right));
    x.height = 1 + Math.max(this.__getHeight(x.left), this.__getHeight(x.right));

    return x;
  }

  __inorder(node, keys) {
    if (!node) return;
    this.__inorder(node.left, keys);
    keys.push(node.key);
    this.__inorder(node.right, keys);
  }

  add(key, value) {
    this.root = this.__add(this.root, key, value);
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

    // 更新高度height
    node.height = 1 + Math.max(this.__getHeight(node.left), this.__getHeight(node.right));

    // 计算平衡因子
    const balanceFactor = this.__getBalanceFactor(node);
    // if (Math.abs(balanceFactor) > 1) {
    //   console.log(`unbalanced : ${balanceFactor}`);
    // }

    // 平衡维护
    // LL
    if (balanceFactor > 1 && this.__getBalanceFactor(node.left) >= 0) {// 不平衡的元素在左侧的左侧
      return this.__rightRotate(node);
    }
    // RR
    if (balanceFactor < -1 && this.__getBalanceFactor(node.right) <= 0) {// 不平衡的元素在右侧的右侧
      return this.__leftRotate(node);
    }
    // LR
    if (balanceFactor > 1 && this.__getBalanceFactor(node.left) < 0) {
      node.left = this.__leftRotate(node.left);
      return this.__rightRotate(node);
    }
    // RL
    if (balanceFactor < -1 && this.__getBalanceFactor(node.right) > 0) {
      node.right = this.__rightRotate(node.right);
      return this.__leftRotate(node);
    }

    return node;
  }

  get(key) {
    const node = this.__getNode(this.root, key);
    return node ? node.value : null;
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

  contains(key) {
    return !!this.__getNode(this.root);
  }

  set(key, newValue) {
    this.root = this.__set(this.root, key, newValue);
  }

  __set(node, key, newValue) {
    if (!node) {
      throw new Error(`${key} does not exist.`);
    }
    if (key === node.key) {
      node.value = newValue;
    } else if (key < node.key) {
      node.left = this.__set(node.left, key, newValue);
    } else {
      node.right = this.__set(node.right, key, newValue);
    }
    return node;
  }

  maximum() {
    if (this.size === 0) {
      throw new Error('AVLTree is empty.');
    }
    return this.__maximum(this.root).value;
  }

  __maximum(node) {
    if (!node.right) {
      return node;
    }
    return this.__maximum(node.right);
  }

  minimum() {
    if (this.size === 0) {
      throw new Error('AVLTree is empty.');
    }
    return this.__minimum(this.root).value;
  }

  __minimum(node) {
    if (!node.left) {
      return node;
    }
    return this.__minimum(node.left);
  }

  remove(key) {
    const retNode = this.__getNode(this.root, key);
    if (!retNode) {
      return null;
    }
    this.root = this.__remove(this.root, key);
    return retNode.value;
  }

  __remove(node, key) {
    if (!node) {
      return node;
    }
    let retNode = null;
    if (key < node.key) {
      node.left = this.__remove(node.left, key);
      retNode = node;
    } else if (key > node.key) {
      node.right = this.__remove(node.right, key);
      retNode = node;
    } else {
      if (!node.left) {
        const rightNode = node.right;
        node.right = null;
        this.size--;
        retNode = rightNode;
      } else if (!node.right) {
        const leftNode = node.left;
        node.left = null;
        this.size--;
        return leftNode;
      } else {
        const successor = this.__minimum(node.right);
        successor.right = this.__remove(node.right, successor.key);
        successor.left = node.left;
        node.left = node.right = null;
        retNode = successor;
      }
    }

    // 删除完一个节点之后retNode可能等于null
    if (!retNode) {
      return retNode;
    }

    // 更新高度height
    retNode.height = 1 + Math.max(this.__getHeight(retNode.left), this.__getHeight(retNode.right));

    // 计算平衡因子
    const balanceFactor = this.__getBalanceFactor(retNode);

    // 平衡维护
    // LL
    if (balanceFactor > 1 && this.__getBalanceFactor(retNode.left) >= 0) {
      return this.__rightRotate(retNode);
    }
    // RR
    if (balanceFactor < -1 && this.__getBalanceFactor(retNode.right) <= 0) {
      return this.__leftRotate(retNode);
    }
    // LR
    if (balanceFactor > 1 && this.__getBalanceFactor(retNode.left) < 0) {
      retNode.left = this.__leftRotate(retNode.left);
      return this.__rightRotate(retNode);
    }
    // RL
    if (balanceFactor < -1 && this.__getBalanceFactor(retNode.right) > 0) {
      retNode.right = this.__rightRotate(retNode.right);
      return this.__leftRotate(retNode);
    }
    return retNode;
  }
}

module.exports = AVLTree;