var Chunk, r;

r = require('restructure');

Chunk = require('./chunk');

module.exports = Chunk({
  skip: new r.Reserved(r.uint8, 'size')
});
