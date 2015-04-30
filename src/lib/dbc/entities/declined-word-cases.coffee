r = require('restructure')
Entity = require('../entity')
StringRef = require('../string-ref')

module.exports = Entity(
  id: r.uint32le
  wordID: r.uint32le
  case: r.uint32le
  word: StringRef
)
