r = require('restructure')
Entity = require('../entity')

module.exports = Entity(
  id: r.uint32le
  nameHash: new r.String(16, 'hex')
  versionHash: new r.String(16, 'hex')
  lastModified: r.uint32le
  flags: r.uint32le
)
