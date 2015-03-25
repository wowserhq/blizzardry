r = require('restructure')
Entity = require('../entity')

module.exports = Entity(
  id: r.uint32le
  daySoundID: r.uint32le
  nightSoundID: r.uint32le
)
