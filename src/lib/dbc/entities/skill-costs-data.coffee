r = require('restructure')
Entity = require('../entity')

module.exports = Entity(
  id: r.uint32le
  skillCostID: r.uint32le
  cost: r.uint32le
)
