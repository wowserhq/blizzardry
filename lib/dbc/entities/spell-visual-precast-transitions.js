var Entity, StringRef, r;

r = require('restructure');

Entity = require('../entity');

StringRef = require('../string-ref');

module.exports = Entity({
  id: r.uint32le,
  loadAnimationName: StringRef,
  holdAnimationName: StringRef
});
