r = require('restructure')
Entity = require('../entity')

module.exports = Entity(
  id: r.uint32le
  emoteTextID: r.uint32le
  raceID: r.uint32le
  gender: r.uint32le
  soundEntryID: r.uint32le
)
