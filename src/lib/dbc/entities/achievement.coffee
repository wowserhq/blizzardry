r = require('restructure')
Entity = require('../entity')
LocalizedStringRef = require('../localized-string-ref')

module.exports = Entity(
  id: r.uint32le
  faction: r.int32le
  mapID: r.int32le
  previousID: r.uint32le
  name: LocalizedStringRef
  description: LocalizedStringRef
  categoryID: r.uint32le
  points: r.uint32le

  unknowns: new r.Reserved(r.uint32le, 2)

  spellIconID: r.uint32le
  reward: LocalizedStringRef

  unknowns2: new r.Reserved(r.uint32le, 2)
)
