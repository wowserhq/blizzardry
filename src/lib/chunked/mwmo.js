const r = require('restructure');
const Chunk = require('./chunk');

module.exports = Chunk({
  filenames: new r.Array(new r.String(null), 'size', 'bytes')
});
