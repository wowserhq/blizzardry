'use strict';

var r = require('restructure');
var Entity = require('../entity');

var _require = require('../../types');

var Vec3Float = _require.Vec3Float;

module.exports = Entity({
  id: r.uint32le,
  mapID: r.uint32le,
  position: Vec3Float,
  radius: r.floatle,
  box: new r.Struct({
    length: r.floatle,
    width: r.floatle,
    height: r.floatle,
    yaw: r.floatle
  })
});