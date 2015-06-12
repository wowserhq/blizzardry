const r = require('restructure')
const Entity = require('../entity')
const LocalizedStringRef = require('../localized-string-ref')

module.exports = Entity({
  id: r.uint32le,
  localeMask: r.uint32le,
  charsetMask: r.uint32le,
  flags: r.uint32le,
  name: LocalizedStringRef
})
