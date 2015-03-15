r = require('restructure')
Entity = require('../entity')

module.exports = Entity(
  id: r.uint32le
  mapID: r.uint32le
  wmoAreaTableID: r.uint32le
  dungeonMapID: r.uint32le
  minZ: r.floatle
)
