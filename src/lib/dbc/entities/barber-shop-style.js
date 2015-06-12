const r = require('restructure')
const Entity = require('../entity')
const LocalizedStringRef = require('../localized-string-ref')

module.exports = Entity({
  id: r.uint32le,
  type: r.uint32le,
  name: LocalizedStringRef,
  additionalName: LocalizedStringRef,
  costModifier: r.floatle,
  raceID: r.uint32le,
  gender: r.uint32le,
  hairID: r.uint32le
})
