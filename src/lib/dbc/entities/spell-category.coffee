r = require('restructure')
Entity = require('../entity')

module.exports = Entity(
  id: r.uint32le
  flags: r.uint32le
)
