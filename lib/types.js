var float2, float3, floatle, r, uint32le;

r = require('restructure');

floatle = new r.Number('Float', 'LE');

float2 = new r.Array(floatle, 2);

float3 = new r.Array(floatle, 3);

uint32le = new r.Number('UInt32', 'LE');

module.exports = {
  floatle: floatle,
  float2: float2,
  float3: float3,
  uint32le: uint32le
};
