const r = require('restructure');

module.exports = new r.Struct({
  x: r.uint16le,
  y: r.uint16le,
  z: r.uint16le,
  w: r.uint16le
});
