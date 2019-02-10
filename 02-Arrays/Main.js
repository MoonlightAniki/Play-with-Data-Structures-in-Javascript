const Array = require('./Array');


const arr = new Array(1);
for (let i = 0; i < 10; ++i) {
  arr.addLast(i);
  console.log(arr.toString());
}
for (let i = 0; i < 10; ++i) {
  arr.removeFirst();
  console.log(arr.toString());
}