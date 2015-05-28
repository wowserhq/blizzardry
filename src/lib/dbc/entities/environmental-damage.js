const r = require('restructure')
const Entity = require('../entity')

module.exports = Entity({
  id: r.uint32le,
  index: r.uint32le,
  spellVisualID: r.uint32le
})
