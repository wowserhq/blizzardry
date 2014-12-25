var Chunk, uint32le;

uint32le = require('../types').uint32le;

Chunk = require('./chunk');

module.exports = Chunk({
  version: uint32le
});
