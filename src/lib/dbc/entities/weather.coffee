r = require('restructure')
Entity = require('../entity')
StringRef = require('../string-ref')

module.exports = Entity(
  id: r.uint32le
  ambienceID: r.uint32le
  effectType: r.uint32le
  effectColors: new r.Array(r.floatle, 3)
  effectTexture: StringRef
)
