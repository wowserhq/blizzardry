r = require('restructure')
Entity = require('../entity')

module.exports = Entity(
  id: r.uint32le

  mapID: r.uint32le

  bounds: new r.Struct(
    left: r.uint32le
    right: r.uint32le
    top: r.uint32le
    bottom: r.uint32le
  )

  offsetX: r.floatle
  offsetY: r.floatle

  scale: r.floatle

  taxiMinX: r.floatle
  taxiMinY: r.floatle
  taxiMaxX: r.floatle
  taxiMaxY: r.floatle

  worldMapID: r.uint32le
)
