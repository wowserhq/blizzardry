r = require('restructure')
Entity = require('../entity')

module.exports = Entity(
  id: r.uint32le
  itemID: r.uint32le
  categoryID: r.uint32le
  bitIndex: r.uint32le
)
