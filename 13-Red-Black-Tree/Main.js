const RBTree = require('./RBTree');
const AVLMap = require('../12-AVL-Tree/AVLMap');
const BSTMap = require('../07-Set-and-Map/BSTMap');
const LinkedListMap = require('../07-Set-and-Map/LinkedListMap');
const HashTable = require('../14-Hash-Table/HashTable');
const HashTable2 = require('../14-Hash-Table/HashTable2');
const HashTable3 = require('../14-Hash-Table/HashTable3');

const INT_MAX = Math.pow(2, 32) - 1;
const testData = [];
const n = 1000000;
for (let i = 0; i < n; ++i) {
  testData.push(Math.random() * INT_MAX | 0);
}

let startTime = Date.now();
const map = new Map();
testData.forEach(num => map.set(num, null));
testData.forEach(num => map.has(num));
let endTime = Date.now();
console.log(`Map, time: ${endTime - startTime} ms.`);

startTime = Date.now();
const rbt = new RBTree();
testData.forEach(num => rbt.add(num, null));
testData.forEach(num => rbt.contains(num));
endTime = Date.now();
console.log(`RBTree, time: ${endTime - startTime} ms.`);

startTime = Date.now();
const obj = {};
testData.forEach(num => obj[num] = true);
testData.forEach(num => obj[num]);
endTime = Date.now();
console.log(`Object, time: ${endTime - startTime} ms.`);

startTime = Date.now();
const avl = new AVLMap();
testData.forEach(num => avl.add(num, null));
testData.forEach(num => avl.contains(num));
endTime = Date.now();
console.log(`AVLMap, time: ${endTime - startTime} ms.`);

startTime = Date.now();
const bst = new BSTMap();
testData.forEach(num => bst.add(num, null));
testData.forEach(num => bst.contains(num));
endTime = Date.now();
console.log(`BSTMap, time: ${endTime - startTime} ms.`);

// startTime = Date.now();
// const linkedListMap = new LinkedListMap();
// testData.forEach(num => linkedListMap.add(num, null));
// testData.forEach(num => linkedListMap.contains(num));
// endTime= Date.now();
// console.log(`LinkedListMap, time: ${endTime - startTime} ms.`);

startTime = Date.now();
const hashtable = new HashTable();
testData.forEach(num => hashtable.add(num, null));
testData.forEach(num => hashtable.contains(num));
endTime = Date.now();
console.log(`HashTable, time: ${endTime - startTime} ms.`);

startTime = Date.now();
const hashtable2 = new HashTable2();
testData.forEach(num => hashtable2.add(num, null));
testData.forEach(num => hashtable2.contains(num));
endTime = Date.now();
console.log(`HashTable2, time: ${endTime - startTime} ms.`);

startTime = Date.now();
const hashtable3 = new HashTable3();
testData.forEach(num => hashtable3.add(num, null));
testData.forEach(num => hashtable3.contains(num));
endTime = Date.now();
console.log(`HashTable3, time: ${endTime - startTime} ms.`);




