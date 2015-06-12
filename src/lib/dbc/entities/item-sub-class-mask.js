const r = require('restructure')
const Entity = require('../entity')
const LocalizedStringRef = require('../localized-string-ref')

module.exports = Entity({
  classID: r.uint32le,
  subClassID: r.uint32le,
  name: LocalizedStringRef
})
