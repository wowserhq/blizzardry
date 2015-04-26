r = require('restructure')
Entity = require('../entity')
LocalizedStringRef = require('../localized-string-ref')
{Vec3Float} = require('../../types')

module.exports = Entity(
  id: r.uint32le
  mapID: r.uint32le
  position: Vec3Float
  name: LocalizedStringRef
)
