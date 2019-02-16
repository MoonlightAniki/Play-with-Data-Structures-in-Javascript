function testUnionFind(uf, m) {
  const size = uf.getSize();
  const startTime = Date.now();
  for (let i = 0; i < m; ++i) {
    const a = Math.random() * size | 0;
    const b = Math.random() * size | 0;
    uf.unionElements(a, b);
  }
  for (let i = 0; i < m; ++i) {
    const a = Math.random() * size | 0;
    const b = Math.random() * size | 0;
    uf.isConnected(a, b);
  }
  const endTime = Date.now();
  return (endTime - startTime) / 1000;
}

const UnionFind1 = require('./UnionFind1');
const UnionFind2 = require('./UnionFind2');
const UnionFind3 = require('./UnionFind3');
const UnionFind4 = require('./UnionFind4');
const UnionFind5 = require('./UnionFind5');
const UnionFind6 = require('./UnionFind6');

const size = 10000000;
const m = 10000;
const uf1 = new UnionFind1(size);
const uf2 = new UnionFind2(size);
const uf3 = new UnionFind3(size);
const uf4 = new UnionFind4(size);
const uf5 = new UnionFind5(size);
const uf6 = new UnionFind6(size);
console.log(`UnionFind1, time: ${testUnionFind(uf1, m)} s.`);
console.log(`UnionFind2, time: ${testUnionFind(uf2, m)} s.`);
console.log(`UnionFind3, time: ${testUnionFind(uf3, m)} s.`);
console.log(`UnionFind4, time: ${testUnionFind(uf4, m)} s.`);
console.log(`UnionFind5, time: ${testUnionFind(uf5, m)} s.`);
console.log(`UnionFind6, time: ${testUnionFind(uf6, m)} s.`);

