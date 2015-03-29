r = require('restructure')
Entity = require('../entity')

module.exports = Entity(
  id: r.uint32le
  castTime: r.uint32le
  castTimePerLevel: r.floatle
  minCastTime: r.uint32le
)
