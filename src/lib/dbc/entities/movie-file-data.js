const r = require('restructure')
const Entity = require('../entity')

module.exports = Entity({
  fileDataID: r.uint32le,
  resolution: r.uint32le
})
