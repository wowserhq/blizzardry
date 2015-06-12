const r = require('restructure')
const Entity = require('../entity')

module.exports = Entity({
  id: r.uint32le,
  flags: r.uint32le,
  foleySoundID: r.uint32le,
  sheathSoundID: r.uint32le,
  unsheathSoundID: r.uint32le
})
