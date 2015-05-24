const r = require('restructure')

const float2 = new r.Array(r.floatle, 2)
const float3 = new r.Array(r.floatle, 3)

const QuatShort = new r.Struct({
  x: r.uint16le,
  y: r.uint16le,
  z: r.uint16le,
  w: r.uint16le
})

const Vec3Float = new r.Struct({
  x: r.floatle,
  y: r.floatle,
  z: r.floatle
})

module.exports = {
  float2, float3, QuatShort, Vec3Float
}
