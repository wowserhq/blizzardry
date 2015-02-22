r = require('restructure')
Entity = require('../entity')

module.exports = Entity(
  raceID: r.uint32le
  gender: r.uint32le
  specificID: r.uint32le
  geosetIDs: new r.Array(r.uint32le, 5)
)
