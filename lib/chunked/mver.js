var Chunk, r;

r = require('restructure');

Chunk = require('./chunk');

module.exports = Chunk({
  version: r.uint32le
});
