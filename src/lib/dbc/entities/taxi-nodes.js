const r = require('restructure')
const Entity = require('../entity')
const LocalizedStringRef = require('../localized-string-ref')
const {Vec3Float} = require('../../types')

module.exports = Entity({
  id: r.uint32le,
  mapID: r.uint32le,
  position: Vec3Float,
  name: LocalizedStringRef,
  mountCreatureIDs: new r.Array(r.uint32le, 2)
})
