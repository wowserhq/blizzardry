const r = require('restructure')
const Entity = require('../entity')
const StringRef = require('../string-ref')

module.exports = Entity({
  name: StringRef,
  slotIcon: StringRef,
  slotNumber: r.uint32le
})
