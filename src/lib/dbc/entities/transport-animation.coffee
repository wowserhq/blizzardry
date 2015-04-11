r = require('restructure')
Entity = require('../entity')
{Vec3Float} = require('../../types')

module.exports = Entity(
  id: r.uint32le
  transportID: r.uint32le
  timeIndex: r.uint32le
  position: Vec3Float
  sequenceID: r.uint32le
)
