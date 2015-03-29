r = require('restructure')
Entity = require('../entity')
LocalizedStringRef = require('../localized-string-ref')
StringRef = require('../string-ref')

module.exports = Entity(
  id: r.uint32le
  name: LocalizedStringRef
  mask: r.uint32le
  immunityPossible: new r.Boolean(r.uint32le)
  internalName: StringRef
)
