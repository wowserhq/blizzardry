var float2, float3, r, ref;

ref = require('../types'), float2 = ref.float2, float3 = ref.float3;

r = require('restructure');

module.exports = new r.Struct({
  position: float3,
  boneWeights: new r.Array(r.uint8, 4),
  boneIndices: new r.Array(r.uint8, 4),
  normal: float3,
  textureCoords: float2,
  random: float2
});
