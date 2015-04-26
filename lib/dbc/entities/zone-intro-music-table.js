var Entity, StringRef, r;

r = require('restructure');

Entity = require('../entity');

StringRef = require('../string-ref');

module.exports = Entity({
  id: r.uint32le,
  name: StringRef,
  soundID: r.uint32le,
  priority: r.uint32le,
  minDelay: r.uint32le
});
