var QuatShort, Vec3Float, float2, float3, r;

r = require('restructure');

float2 = new r.Array(r.floatle, 2);

float3 = new r.Array(r.floatle, 3);

QuatShort = new r.Struct({
  x: r.uint16le,
  y: r.uint16le,
  z: r.uint16le,
  w: r.uint16le
});

Vec3Float = new r.Struct({
  x: r.floatle,
  y: r.floatle,
  z: r.floatle
});

module.exports = {
  float2: float2,
  float3: float3,
  QuatShort: QuatShort,
  Vec3Float: Vec3Float
};
