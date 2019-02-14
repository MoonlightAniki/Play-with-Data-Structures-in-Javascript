const MaxHeap = require('./MaxHeap');

function testHeap(arr, isHeapify) {
  const startTime = Date.now();
  let heap;
  if (isHeapify) {
    heap = new MaxHeap(arr);
  } else {
    heap = new MaxHeap();
    arr.forEach(element => heap.add(element));
  }
  const endTime = Date.now();
  return (endTime - startTime) / 1000;
}

const INT_MAX = Math.pow(2, 32) - 1;
const arr = [];
while (arr.length < 10000000) {
  arr.push((Math.random() * INT_MAX) | 0);
}
const time1 = testHeap(arr, true);
console.log(`isHeapify = true, time = ${time1} s.`);
const time2 = testHeap(arr, false);
console.log(`isHeapify = false, time = ${time2} s.`);
