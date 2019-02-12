const BST = require('./BST');

const bst = new BST();
for (let i = 0; i < 100; ++i) {
  bst.add((Math.random() * 1000) | 0);
}
const arr = [];
while (bst.getSize()) {
  arr.push(bst.removeMax());
}
console.log(arr);