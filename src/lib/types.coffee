r = require('restructure')

floatle  = new r.Number('Float', 'LE')
float2   = new r.Array(floatle, 2)
float3   = new r.Array(floatle, 3)
uint16le = new r.Number('UInt16', 'LE')
uint32le = new r.Number('UInt32', 'LE')

module.exports = {
  floatle, float2, float3, uint16le, uint32le
}
