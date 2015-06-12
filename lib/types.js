'use strict';

var r = require('restructure');

var float2 = new r.Array(r.floatle, 2);
var float3 = new r.Array(r.floatle, 3);

var QuatShort = new r.Struct({
  x: r.uint16le,
  y: r.uint16le,
  z: r.uint16le,
  w: r.uint16le
});

var Vec3Float = new r.Struct({
  x: r.floatle,
  y: r.floatle,
  z: r.floatle
});

module.exports = {
  float2: float2, float3: float3, QuatShort: QuatShort, Vec3Float: Vec3Float
};