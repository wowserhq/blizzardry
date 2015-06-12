const r = require('restructure')
const Entity = require('../entity')
const LocalizedStringRef = require('../localized-string-ref')

module.exports = Entity({
  id: r.uint32le,
  mapID: r.uint32le,
  parentID: r.uint32le,
  areaBit: r.uint32le,
  flags: r.uint32le,

  soundPreferenceID: r.uint32le,
  underwaterSoundPreferenceID: r.uint32le,
  soundAmbienceID: r.uint32le,
  zoneMusicID: r.uint32le,
  zoneIntroMusicID: r.uint32le,

  level: r.uint32le,
  name: LocalizedStringRef,
  factionGroupID: r.uint32le,
  liquidTypes: new r.Array(r.uint32le, 4),
  minElevation: r.floatle,
  ambientMultiplier: r.floatle,
  lightID: r.uint32le
})
