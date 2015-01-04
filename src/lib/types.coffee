r = require('restructure')

floatle = r.floatle

float2   = new r.Array(floatle, 2)
float3   = new r.Array(floatle, 3)

Vec3Float = new r.Struct(
  x: floatle
  y: floatle
  z: floatle
)

module.exports = {
  float2, float3, Vec3Float

  floatle: floatle
  int8: r.int8
  int32le: r.int32le
  uint8: r.uint8
  uint16le: r.uint16le
  uint32le: r.uint32le
}
