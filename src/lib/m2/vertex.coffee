r = require('restructure')
{float2, float3} = require('../types')

module.exports = new r.Struct(
  position: float3
  boneWeights: new r.Array(r.uint8, 4)
  boneIndices: new r.Array(r.uint8, 4)
  normal: float3
  textureCoords: float2
  random: float2
)
