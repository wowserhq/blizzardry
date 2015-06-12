const r = require('restructure')
const Entity = require('../entity')
const LocalizedStringRef = require('../localized-string-ref')

module.exports = Entity({
  id: r.uint32le,
  index: r.int32le,
  raceMask: new r.Array(r.uint32le, 4),
  classMask: new r.Array(r.uint32le, 4),
  reputationBase: new r.Array(r.int32le, 4),
  reputationFlags: new r.Array(r.uint32le, 4),
  parentID: r.uint32le,
  name: LocalizedStringRef,
  description: LocalizedStringRef
})
