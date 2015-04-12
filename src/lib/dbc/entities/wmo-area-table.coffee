r = require('restructure')
Entity = require('../entity')
LocalizedStringRef = require('../localized-string-ref')

module.exports = Entity(
  id: r.uint32le
  rootID: r.uint32le
  nameSetID: r.uint32le
  groupID: r.int32le

  unknowns: new r.Reserved(r.uint32le, 5)

  flags: r.uint32le
  areaTableID: r.uint32le
  name: LocalizedStringRef
)
