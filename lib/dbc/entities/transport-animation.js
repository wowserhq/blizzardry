'use strict';

var r = require('restructure');
var Entity = require('../entity');

var _require = require('../../types');

var Vec3Float = _require.Vec3Float;

module.exports = Entity({
  id: r.uint32le,
  transportID: r.uint32le,
  timeIndex: r.uint32le,
  position: Vec3Float,
  sequenceID: r.uint32le
});