const r = require('restructure')
const Entity = require('../entity')
const LocalizedStringRef = require('../localized-string-ref')
const StringRef = require('../string-ref')

module.exports = Entity({
  id: r.uint32le,
  mapID: r.uint32le,
  difficulty: r.uint32le,
  message: LocalizedStringRef,
  raidDuration: r.uint32le,
  maxPlayers: r.uint32le,
  name: StringRef
})
