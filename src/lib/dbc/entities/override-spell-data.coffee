r = require('restructure')
Entity = require('../entity')

module.exports = Entity(
  id: r.uint32le
  spellIDs: new r.Array(r.uint32le, 10)
  flags: r.uint32le
)
