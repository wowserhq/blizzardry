r = require('restructure')
Entity = require('../entity')
LocalizedStringRef = require('../localized-string-ref')

module.exports = Entity(
  id: r.uint32le
  flags: r.uint32le
  factionGroup: r.uint32le
  name: LocalizedStringRef
  shortcut: LocalizedStringRef
)
