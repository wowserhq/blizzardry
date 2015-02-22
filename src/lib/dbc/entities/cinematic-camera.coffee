r = require('restructure')
Entity = require('../entity')
StringRef = require('../string-ref')
{Vec3Float} = require('../../types')

module.exports = Entity(
  id: r.uint32le
  file: StringRef
  voiceoverID: r.uint32le
  position: Vec3Float
  rotation: r.floatle
)
