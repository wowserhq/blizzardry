'use strict';

var r = require('restructure');
var Entity = require('../entity');

var _require = require('../../types');

var Vec3Float = _require.Vec3Float;

module.exports = Entity({
  id: r.uint32le,
  mapID: r.uint32le,
  position: Vec3Float,
  fallOffStart: r.floatle,
  fallOffEnd: r.floatle,
  skyFogID: r.uint32le,
  waterID: r.uint32le,
  sunsetID: r.uint32le,
  otherID: r.uint32le,
  deathID: r.uint32le,
  unknowns: new r.Reserved(r.uint32le, 3)
});