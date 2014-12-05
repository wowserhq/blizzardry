var float2, float3, r, _ref;

r = require('restructure');

_ref = require('../types'), float2 = _ref.float2, float3 = _ref.float3;

module.exports = new r.Struct({
  position: float3,
  boneWeights: new r.Array(r.uint8, 4),
  boneIndices: new r.Array(r.uint8, 4),
  normal: float3,
  textureCoords: float2,
  random: float2
});
