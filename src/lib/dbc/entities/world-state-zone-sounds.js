const r = require('restructure')
const Entity = require('../entity')

module.exports = Entity({
  id: r.uint32le,
  value: r.uint32le,
  areaID: r.uint32le,
  wmoAreaID: r.uint32le,
  introMusicID: r.uint32le,
  musicID: r.uint32le,
  soundAmbienceID: r.uint32le,
  soundProviderPreferenceID: r.uint32le
})
