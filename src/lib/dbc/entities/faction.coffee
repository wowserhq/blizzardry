{int32le, uint32le} = require('../../types')
r = require('restructure')
Entity = require('../entity')
LocalizedStringRef = require('../localized-string-ref')

module.exports = Entity(
  id: uint32le
  index: int32le
  raceMask: new r.Array(uint32le, 4)
  classMask: new r.Array(uint32le, 4)
  reputationBase: new r.Array(int32le, 4)
  reputationFlags: new r.Array(uint32le, 4)
  parentID: uint32le
  name: LocalizedStringRef
  description: LocalizedStringRef
)
