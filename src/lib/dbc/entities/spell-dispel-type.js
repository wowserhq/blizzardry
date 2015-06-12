const r = require('restructure')
const Entity = require('../entity')
const LocalizedStringRef = require('../localized-string-ref')
const StringRef = require('../string-ref')

module.exports = Entity({
  id: r.uint32le,
  name: LocalizedStringRef,
  mask: r.uint32le,
  immunityPossible: new r.Boolean(r.uint32le),
  internalName: StringRef
})
