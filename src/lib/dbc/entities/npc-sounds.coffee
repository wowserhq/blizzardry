r = require('restructure')
Entity = require('../entity')

module.exports = Entity(
  id: r.uint32le
  greetingSoundID: r.int32le
  farewellSoundID: r.int32le
  pissedSoundID: r.int32le
  unknown: new r.Reserved(r.int32le)
)
