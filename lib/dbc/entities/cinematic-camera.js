'use strict';

var r = require('restructure');
var Entity = require('../entity');
var StringRef = require('../string-ref');

var _require = require('../../types');

var Vec3Float = _require.Vec3Float;

module.exports = Entity({
  id: r.uint32le,
  file: StringRef,
  voiceoverID: r.uint32le,
  position: Vec3Float,
  rotation: r.floatle
});