r = require('restructure')

float2   = new r.Array(r.floatle, 2)
float3   = new r.Array(r.floatle, 3)

Vec3Float = new r.Struct(
  x: r.floatle
  y: r.floatle
  z: r.floatle
)

module.exports = {
  float2, float3, Vec3Float
}
