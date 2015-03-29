r = require('restructure')
Entity = require('../entity')

module.exports = Entity(
  id: r.uint32le
  baseDuration: r.uint32le
  perLevel: r.uint32le
  maxDuration: r.uint32le
)
