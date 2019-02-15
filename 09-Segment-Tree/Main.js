const SegmentTree = require('./SegmentTree');

const nums = [-2, 0, 3, -5, 2, -1];
const segmentTree = new SegmentTree(nums, {
  merge: (a, b) => a + b
});
// console.log(segmentTree.toString());
console.log(segmentTree.query(0, 2));
console.log(segmentTree.query(2, 5));
console.log(segmentTree.query(0, 5));