'use strict';

var r = require('restructure');
var Entity = require('../entity');

var _require = require('../../types');

var Vec3Float = _require.Vec3Float;

module.exports = Entity({
  id: r.uint32le,
  pathID: r.uint32le,
  nodeIndex: r.uint32le,
  mapID: r.uint32le,
  position: Vec3Float,
  flags: r.uint32le,
  delay: r.uint32le,
  arrivalEventID: r.uint32le,
  departureEventID: r.uint32le
});