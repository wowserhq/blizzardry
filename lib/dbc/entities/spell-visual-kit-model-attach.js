'use strict';

var r = require('restructure');
var Entity = require('../entity');

var _require = require('../../types');

var Vec3Float = _require.Vec3Float;

module.exports = Entity({
  id: r.uint32le,
  parentKitID: r.uint32le,
  effectID: r.uint32le,
  attachmentID: r.uint32le,
  offset: Vec3Float,
  yaw: r.floatle,
  pitch: r.floatle,
  roll: r.floatle
});