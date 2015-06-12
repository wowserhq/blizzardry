const r = require('restructure')
const Entity = require('../entity')
const LocalizedStringRef = require('../localized-string-ref')
const StringRef = require('../string-ref')

module.exports = Entity({
  id: r.uint32le,
  name: StringRef,
  spellItemEnchantmentIDs: new r.Array(r.uint32le, 5),
  suffix: LocalizedStringRef
})
