const r = require('restructure')
const Entity = require('../entity')
const LocalizedStringRef = require('../localized-string-ref')

module.exports = Entity({
  id: r.uint32le,
  name: LocalizedStringRef,
  itemIDs: new r.Array(r.uint32le, 17),
  spellIDs: new r.Array(r.uint32le, 8),
  spellThresholds: new r.Array(r.uint32le, 8),
  requiredSkillID: r.uint32le,
  requiredSkillRank: r.uint32le
})
