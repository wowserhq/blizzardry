var float2, float3, r, uint8, _ref;

_ref = require('../types'), float2 = _ref.float2, float3 = _ref.float3, uint8 = _ref.uint8;

r = require('restructure');

module.exports = new r.Struct({
  position: float3,
  boneWeights: new r.Array(uint8, 4),
  boneIndices: new r.Array(uint8, 4),
  normal: float3,
  textureCoords: float2,
  random: float2
});
