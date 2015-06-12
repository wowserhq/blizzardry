'use strict';

var _require = require('../types');

var float2 = _require.float2;
var float3 = _require.float3;

var r = require('restructure');

module.exports = new r.Struct({
  position: float3,
  boneWeights: new r.Array(r.uint8, 4),
  boneIndices: new r.Array(r.uint8, 4),
  normal: float3,
  textureCoords: float2,
  random: float2
});