var Entity, StringRef, Vec3Float, r;

r = require('restructure');

Entity = require('../entity');

StringRef = require('../string-ref');

Vec3Float = require('../../types').Vec3Float;

module.exports = Entity({
  id: r.uint32le,
  position: Vec3Float,
  direction: Vec3Float,
  soundID: r.uint32le,
  mapID: r.uint32le,
  name: StringRef
});
