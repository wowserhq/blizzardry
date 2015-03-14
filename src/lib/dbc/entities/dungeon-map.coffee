r = require('restructure')
Entity = require('../entity')

module.exports = Entity(
  id: r.uint32le
  mapID: r.uint32le
  layer: r.uint32le
  coordinates: new r.Array(r.floatle, 4)
  areaID: r.uint32le
)
