const r = require('restructure')
const Entity = require('../entity')
const LocalizedStringRef = require('../localized-string-ref')
const StringRef = require('../string-ref')

module.exports = Entity({
  id: r.uint32le,
  internalName: StringRef,
  type: r.uint32le,
  pvp: new r.Boolean(r.uint32le),
  name: LocalizedStringRef,
  areaID: r.uint32le,

  hordeIntro: LocalizedStringRef,
  allianceIntro: LocalizedStringRef,

  loadingScreenID: r.uint32le,
  minimapIconScale: r.floatle,

  corpseMapID: r.int32le,
  corpseStartX: r.floatle,
  corpseStartY: r.floatle,

  timeOfDayOverride: r.int32le,
  expansionID: r.uint32le,
  maxPlayers: r.uint32le,
  numberOfPlayers: r.uint32le
})
