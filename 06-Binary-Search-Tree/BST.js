class Node {
  constructor(e) {
    this.e = e;
    this.left = null;
    this.right = null;
  }
}

class BST {
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

  add(e) {
    this.root = this.__add(this.root, e);
  }

  __add(node, e) {
    if (!node) {
      this.size++;
      return new Node(e);
    }
    if (e > node.e) {
      node.right = this.__add(node.right, e);
    } else if (e < node.e) {
      node.left = this.__add(node.left, e);
    }
    return node;
  }

  contains(e) {
    return this.__contains(this.root, e);
  }

  __contains(node, e) {
    if (!node) {
      return false;
    }
    if (e === node.e) {
      return true;
    } else if (e < node.e) {
      return this.__contains(node.left, e);
    } else {
      return this.__contains(node.right, e);
    }
  }

  preOrder() {
    this.__preOrder(this.root);
  }

  __preOrder(node) {
    if (!node) {
      return;
    }
    console.log(node.e);
    this.__preOrder(node.left);
    this.__preOrder(node.right);
  }

  inOrder() {
    this.__inOrder(this.root);
  }

  __inOrder(node) {
    if (!node) {
      return;
    }
    this.__inOrder(node.left);
    console.log(node.e);
    this.__inOrder(node.right);
  }

  postOrder() {
    this.__postOrder(this.root);
  }

  __postOrder(node) {
    if (!node) {
      return;
    }
    this.__postOrder(node.left);
    this.__postOrder(node.right);
    console.log(node.e);
  }


  // 层序遍历
  levelOrder() {
    if (!this.root) {
      return;
    }
    const q = [];
    q.push(this.root);
    while (q.length) {
      for (let i = 0; i < q.length; ++i) {
        let front = q.shift();
        console.log(front.e);
        if (front.left) q.push(front.left);
        if (front.right) q.push(front.right);
      }
    }
  }

  // 非递归的前序遍历
  preOrderNR() {
    if (!this.root) {
      return;
    }
    const stack = [];
    stack.push(this.root);
    while (stack.length) {
      const top = stack.pop();
      console.log(top.e);
      if (top.right) stack.push(top.right);
      if (top.left) stack.push(top.left);
    }
  }

  // 非递归的中序遍历
  inOrderNR() {
    if (!this.root) {
      return;
    }
    const stack = [];
    stack.push(this.root);
    while (stack.length) {
      const top = stack.pop();
      if (!top.left && !top.right) {
        console.log(top.e);
      } else {
        if (top.right) {}stack.push(top.right);
        stack.push(new Node(top.e));
        if (top.left) stack.push(top.left);
      }
    }
  }

  // 非递归的后序遍历
  postOrderNR() {
    if (!this.root) {
      return;
    }
    const stack = [];
    stack.push(this.root);
    while (stack.length) {
      let top = stack.pop();
      if (!top.left && !top.right) {
        console.log(top.e);
      } else {
        stack.push(new Node(top.e));
        if (top.right) stack.push(top.right);
        if (top.left) stack.push(top.left);
      }
    }
  }

  minimum() {
    if (this.size === 0) {
      throw new Error('BST is empty.');
    }
    return this.__minimum(this.root).e;
  }

  // 返回以node为根节点的二分搜索树的最小值所在的节点
  __minimum(node) {
    if (!node.left) {
      return node;
    }
    return this.__minimum(node.left);
  }

  maximum() {
    if (this.size === 0) {
      throw new Error('BST is empty.');
    }
    return this.__maximum(this.root).e;
  }

  __maximum(node) {
    if (!node.right) {
      return node;
    }
    return this.__maximum(node.right);
  }

  removeMin() {
    let ret = this.minimum();
    this.root = this.__removeMin(this.root);
    return ret;
  }

  // 删除已node为根节点的二分搜索树中的最小值，并返回新的根节点
  __removeMin(node) {
    if (!node.left) {
      let rightNode = node.right;
      node.right = null;
      this.size--;
      return rightNode;
    }
    node.left = this.__removeMin(node.left);
    return node;
  }

  removeMax() {
    let ret = this.maximum();
    this.root = this.__removeMax(this.root);
    return ret;
  }

  __removeMax(node) {
    if (!node.right) {
      let leftNode = node.left;
      node.left = null;
      this.size--;
      return leftNode;
    }
    node.right = this.__removeMax(node.right);
    return node;
  }

  remove(e) {
    this.root = this.__remove(this.root, e);
  }

  __remove(node, e) {
    if (!node) {
      return node;
    }
    if (e < node.e) {
      node.left = this.__remove(node.left, e);
      return node;
    } else if (e > node.e) {
      node.right = this.__remove(node.right, e);
      return node;
    } else {// node.e === e
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
      // node.left && node.right
      let successor = this.__minimum(node.right);
      successor.left = node.left;
      successor.right = this.__removeMin(node.right);
      node.left = node.right = null;
      return successor;
    }
  }
}

module.exports = BST;
