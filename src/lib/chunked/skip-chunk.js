const r = require('restructure');
const Chunk = require('./chunk');

module.exports = Chunk({
  skip: new r.Reserved(r.uint8, 'size')
});
