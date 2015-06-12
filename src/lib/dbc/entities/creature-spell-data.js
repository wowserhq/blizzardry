const r = require('restructure')
const Entity = require('../entity')

module.exports = Entity({
  id: r.uint32le,
  spellIDs: new r.Array(r.uint32le, 4),
  cooldowns: new r.Array(r.uint32le, 4)
})
