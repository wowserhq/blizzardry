r = require('restructure')
Entity = require('../entity')

module.exports = Entity(
  id: r.uint32le
  animationID: r.uint32le
  typeID: r.uint32le
  flags: r.uint32le
  unknown: new r.Reserved(r.uint32le)
)
