r = require('restructure')
Entity = require('../entity')
LocalizedStringRef = require('../localized-string-ref')

module.exports = Entity(
  classID: r.uint32le
  subClassID: r.uint32le
  name: LocalizedStringRef
)
