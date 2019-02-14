const MaxHeap = require('./MaxHeap');

class PriorityQueue {
  constructor(arr) {
    this.heap = new MaxHeap(arr);
  }

  getSize() {
    return this.heap.getSize();
  }

  isEmpty() {
    return this.heap.isEmpty();
  }

  enqueue(e) {
    this.heap.add(e);
  }

  dequeue() {
    return this.heap.extractMax();
  }

  getFront() {
    return this.heap.findMax();
  }
}