const r = require('restructure')
const Entity = require('../entity')
const {Vec3Float} = require('../../types')

module.exports = Entity({
  id: r.uint32le,
  transportID: r.uint32le,
  timeIndex: r.uint32le,
  position: Vec3Float,
  sequenceID: r.uint32le
})
