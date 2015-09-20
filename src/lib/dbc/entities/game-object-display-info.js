const r = require('restructure');
const Entity = require('../entity');
const StringRef = require('../string-ref');
const { Vec3Float } = require('../../types');

module.exports = Entity({
  id: r.uint32le,
  file: StringRef,
  soundIDs: new r.Array(r.uint32le, 10),
  minBoundingBox: Vec3Float,
  maxBoundingBox: Vec3Float,
  objectEffectPackageID: r.uint32le
});
