r = require('restructure')
{uint16le, uint32le} = require('../types')
Nofs = require('./nofs')

module.exports = new r.Struct(

  id: uint32le

  indices: new Nofs(uint16le)
  triangles: new Nofs(new r.Array(uint16le, 3), (length) -> length / 3)
  properties: new Nofs()
  submeshes: new Nofs()
  textureUnits: new Nofs()
  bones: uint32le

)
