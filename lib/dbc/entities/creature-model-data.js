var Entity, StringRef, r;

r = require('restructure');

Entity = require('../entity');

StringRef = require('../string-ref');

module.exports = Entity({
  id: r.uint32le,
  flags: r.uint32le,
  path: StringRef,
  sizeClass: r.uint32le,
  scale: r.floatle,
  bloodID: r.int32le,
  skips: new r.Reserved(r.uint32le, 22)
});
