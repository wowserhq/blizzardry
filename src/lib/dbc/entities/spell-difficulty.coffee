r = require('restructure')
Entity = require('../entity')

module.exports = Entity(
  id: r.uint32le
  normal10ManSpellID: r.uint32le
  normal25ManSpellID: r.uint32le
  heroic10ManSpellID: r.uint32le
  heroic25ManSpellID: r.uint32le
)
