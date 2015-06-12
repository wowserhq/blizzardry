'use strict';

var r = require('restructure');
var AnimationBlock = require('./animation-block');
var Nofs = require('./nofs');

var _require = require('../types');

var QuatShort = _require.QuatShort;
var Vec3Float = _require.Vec3Float;

module.exports = new r.Struct({
  keyBoneID: r.int32le,
  flags: r.uint32le,
  parentID: r.int16le,
  subMeshID: r.int16le,

  unknowns: new r.Reserved(r.uint16le, 2),

  translation: new AnimationBlock(Vec3Float),
  rotation: new AnimationBlock(QuatShort),
  scaling: new AnimationBlock(Vec3Float),

  pivotPoint: Vec3Float
});