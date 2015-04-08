var Entity, StringRef, r;

r = require('restructure');

Entity = require('../entity');

StringRef = require('../string-ref');

module.exports = Entity({
  id: r.uint32le,
  name: StringRef,
  unknowns: new r.Reserved(r.uint32le, 2),
  soundID: r.uint32le,
  flags: r.uint32le
});
