r = require('restructure')
Entity = require('../entity')
LocalizedStringRef = require('../localized-string-ref')

module.exports = Entity(
  id: r.uint32le
  subClassID: r.uint32le
  isWeapon: new r.Boolean(r.uint32le)
  name: LocalizedStringRef
)
