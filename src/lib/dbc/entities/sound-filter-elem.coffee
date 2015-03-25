r = require('restructure')
Entity = require('../entity')

module.exports = Entity(
  id: r.uint32le
  filterID: r.uint32le
  order: r.uint32le
  type: r.uint32le
  parameters: new r.Array(r.floatle, 9)
)
