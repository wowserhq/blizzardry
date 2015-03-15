var Entity, StringRef, Vec3Float, r;

r = require('restructure');

Entity = require('../entity');

StringRef = require('../string-ref');

Vec3Float = require('../../types').Vec3Float;

module.exports = Entity({
  id: r.uint32le,
  file: StringRef,
  soundEntryIDs: new r.Array(r.uint32le, 10),
  minBoundingBox: Vec3Float,
  maxBoundingBox: Vec3Float,
  objectEffectPackageID: r.uint32le
});
