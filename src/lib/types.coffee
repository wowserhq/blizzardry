r = require('restructure')

floatle  = new r.Number('Float', 'LE')
float2   = new r.Array(floatle, 2)
float3   = new r.Array(floatle, 3)
int16le  = new r.Number('Int16', 'LE')
int32le  = new r.Number('Int32', 'LE')
uint16le = new r.Number('UInt16', 'LE')
uint32le = new r.Number('UInt32', 'LE')

Vec3Float = new r.Struct(
  x: floatle
  y: floatle
  z: floatle
)

module.exports = {
  floatle, float2, float3,
  int16le, int32le,
  uint16le, uint32le,
  Vec3Float
}
