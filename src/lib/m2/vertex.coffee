{float2, float3, uint8} = require('../types')
r = require('restructure')

module.exports = new r.Struct(
  position: float3
  boneWeights: new r.Array(uint8, 4)
  boneIndices: new r.Array(uint8, 4)
  normal: float3
  textureCoords: float2
  random: float2
)
