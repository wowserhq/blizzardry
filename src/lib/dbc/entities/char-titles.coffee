r = require('restructure')
Entity = require('../entity')
LocalizedStringRef = require('../localized-string-ref')

module.exports = Entity(
  id: r.uint32le
  conditionID: r.uint32le
  male: LocalizedStringRef
  female: LocalizedStringRef
  titleMask: r.uint32le
)
