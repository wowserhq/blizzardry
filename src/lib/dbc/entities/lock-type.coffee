r = require('restructure')
Entity = require('../entity')
LocalizedStringRef = require('../localized-string-ref')
StringRef = require('../string-ref')

module.exports = Entity(
  id: r.uint32le
  name: LocalizedStringRef
  state: LocalizedStringRef
  process: LocalizedStringRef
  internalName: StringRef
)
