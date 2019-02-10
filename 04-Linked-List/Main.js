const LinkedList = require('./LinkedList');
const LinkedListStack = require('./LinkedListStack');
const ArrayStack = require('../03-Stacks-and-Queues/ArrayStack');

// const list = new LinkedList();
// for (let i = 0; i < 5; ++i) {
//   list.addLast(i);
//   console.log(list.toString());
// }
// list.add(2, 666);
// console.log(list.toString());
//
// list.addFirst(666);
// list.addFirst(666);
// console.log(list.removeAll(666));
// console.log(list.toString());
//
// const stack = new LinkedListStack();
// for (let i = 0; i < 5; ++i) {
//   stack.push(i);
//   console.log(stack.toString());
// }
// stack.pop();
// console.log(stack.toString());

const INT_MAX = Math.pow(2, 32) - 1;

function testStack(stack, opCount) {
  const startTime = Date.now();
  for (let i = 0; i < opCount; ++i) {
    stack.push((Math.random() * INT_MAX) | 0);
  }
  for (let i = 0; i < opCount; ++i) {
    stack.peek();
    stack.pop();
  }
  const endTime = Date.now();
  return (endTime - startTime) / 1000;
}

const opCount = 10000000;
const time1 = testStack(new ArrayStack(), opCount);
const time2 = testStack(new LinkedListStack(), opCount);
console.log(`ArrayStack, time: ${time1} s.`);
console.log(`LinkedListStack, time: ${time2} s.`);