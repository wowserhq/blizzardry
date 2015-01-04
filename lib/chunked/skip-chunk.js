var Chunk, r, uint8;

r = require('restructure');

uint8 = require('../types').uint8;

Chunk = require('./chunk');

module.exports = Chunk({
  skip: new r.Reserved(uint8, 'size')
});
