r = require('restructure')
Entity = require('../entity')
LocalizedStringRef = require('../localized-string-ref')

module.exports = Entity(
  id: r.uint32le
  name: LocalizedStringRef
  thresholds: new r.Array(r.uint32le, 3)
  damageModifiers: new r.Array(r.floatle, 3)
)
