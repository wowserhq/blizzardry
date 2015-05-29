const r = require('restructure')
const Entity = require('../entity')
const LocalizedStringRef = require('../localized-string-ref')

module.exports = Entity({
  id: r.uint32le,
  flags: r.uint32le,
  fizzleSoundID: r.uint32le,
  name: LocalizedStringRef
})