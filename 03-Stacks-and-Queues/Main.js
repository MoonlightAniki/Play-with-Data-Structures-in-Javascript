const ArrayStack = require('./ArrayStack');
const ArrayQueue = require('./ArrayQueue');
const LoopQueue = require('./LoopQueue');
const LinkedListQueue = require('../04-Linked-List/LinkedListQueue');

const INT_MAX = Math.pow(2, 32) - 1;

function testQueue(queue, opCount) {
  const startTime = Date.now();
  for (let i = 0; i < opCount; ++i) {
    queue.enqueue((Math.random() * INT_MAX) | 0);
  }
  for (let i = 0; i < opCount; ++i) {
    queue.dequeue();
  }
  let endTime = Date.now();
  return (endTime - startTime) / 1000;
}

// 使用原生的数组的API模拟队列
function testArray(opCount) {
  const queue = [];
  const startTime = Date.now();
  for (let i = 0; i < opCount; ++i) {
    queue.push((Math.random() * INT_MAX) | 0);
  }
  for (let i = 0; i < opCount; ++i) {
    queue.shift();
  }
  const endTime = Date.now();
  return (endTime - startTime) / 1000;
}

const opCount = 100000;
const time1 = testQueue(new ArrayQueue(), opCount);
console.log(`ArrayQueue, time: ${time1} s.`);
const time2 = testQueue(new LoopQueue(), opCount);
console.log(`LoopQueue, time: ${time2} s.`);
const time3 = testArray(opCount);
console.log(`Array, time: ${time3} s.`);
const time4 = testQueue(new LinkedListQueue(), opCount);
console.log(`LinkedListQueue, time: ${time4} s.`);