r = require('restructure')
Entity = require('../entity')

module.exports = Entity(
  id: r.uint32le
  entryIDs: new r.Array(r.uint32le, 6)
  nextGroupID: r.uint32le
)
