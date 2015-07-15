const r = require('restructure');
const Chunk = require('./chunk');

module.exports = Chunk({
  version: r.uint32le
});
