r = require('restructure')
Entity = require('../entity')
LocalizedStringRef = require('../localized-string-ref')
StringRef = require('../string-ref')

module.exports = Entity(
  id: r.uint32le
  name: StringRef
  spellItemEnchantmentIDs: new r.Array(r.uint32le, 5)
  suffix: LocalizedStringRef
)
