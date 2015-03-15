var Entity, StringRef, r;

r = require('restructure');

Entity = require('../entity');

StringRef = require('../string-ref');

module.exports = Entity({
  id: r.uint32le,
  name: StringRef,
  emoteID: r.uint32le,
  emoteTextDataIDs: new r.Array(r.uint32le, 16)
});
