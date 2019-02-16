const Trie = require('./Trie');

const trie = new Trie();
trie.add('app');
trie.add('apple');
trie.add('cat');
trie.add('pan');
trie.add('panda');
console.log(trie.getSize());
console.log(trie.contains('ap'));
console.log(trie.isPrefix('ap'));