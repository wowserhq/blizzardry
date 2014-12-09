{floatle, int32le, uint32le} = require('../../types')
r = require('restructure')
Entity = require('../entity')
LocalizedStringRef = require('../localized-string-ref')
StringRef = require('../string-ref')

module.exports = Entity(
  id: uint32le
  internalName: StringRef
  type: uint32le
  pvp: uint32le
  name: LocalizedStringRef
  areaTableID: uint32le

  hordeIntro: LocalizedStringRef
  allianceIntro: LocalizedStringRef

  loadingScreenID: uint32le
  minimapIconScale: floatle

  corpseMapID: int32le
  corpseStartX: floatle
  corpseStartY: floatle

  timeOfDayOverride: int32le
  expansionID: uint32le
  maxPlayers: uint32le
  numberOfPlayers: uint32le
)
