'use strict';

var r = require('restructure');
var Entity = require('../entity');
var StringRef = require('../string-ref');

var _require = require('../../types');

var Vec3Float = _require.Vec3Float;

module.exports = Entity({
  id: r.uint32le,
  file: StringRef,
  soundIDs: new r.Array(r.uint32le, 10),
  minBoundingBox: Vec3Float,
  maxBoundingBox: Vec3Float,
  objectEffectPackageID: r.uint32le
});