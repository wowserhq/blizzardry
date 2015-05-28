const r = require('restructure')
const Entity = require('../entity')

module.exports = Entity({
  id: r.uint32le,
  types: new r.Array(r.uint32le, 8),
  propertyIDs: new r.Array(r.uint32le, 8),
  requiredSkillIDs: new r.Array(r.uint32le, 8),
  actions: new r.Array(r.uint32le, 8)
})
