r = require('restructure')
Entity = require('../entity')
StringRef = require('../string-ref')
LocalizedStringRef = require('../localized-string-ref')

module.exports = Entity(
  id: r.uint32le
  type: r.uint32le
  value: r.uint32le
  fallbackID: r.uint32le
  raceMask: r.uint32le
  internalName: StringRef
  name: LocalizedStringRef
  lockID: r.uint32le
)
