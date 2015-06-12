const r = require('restructure')
const Entity = require('../entity')
const StringRef = require('../string-ref')
const {Vec3Float} = require('../../types')

module.exports = Entity({
  id: r.uint32le,
  position: Vec3Float,
  direction: Vec3Float,
  soundID: r.uint32le,
  mapID: r.uint32le,
  name: StringRef
})
