r = require('restructure')
Entity = require('../entity')

module.exports = Entity(
  id: r.uint32le
  radius: r.floatle
  radiusPerLevel: r.floatle
  maxRadius: r.floatle
)
