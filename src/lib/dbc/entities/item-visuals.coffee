r = require('restructure')
Entity = require('../entity')

module.exports = Entity(
  id: r.uint32le
  visualEffectIDs: new r.Array(r.uint32le, 5)
)
