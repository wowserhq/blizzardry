
r = require('restructure')
Entity = require('../entity')
{Vec3Float} = require('../../types')

module.exports = Entity(
  id: r.uint32le
  mapID: r.uint32le
  position: Vec3Float
  radius: r.floatle
  box: new r.Struct(
    length: r.floatle
    width: r.floatle
    height: r.floatle
    yaw: r.floatle
  )
)
