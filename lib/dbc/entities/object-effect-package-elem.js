var Entity, r;

r = require('restructure');

Entity = require('../entity');

module.exports = Entity({
  id: r.uint32le,
  effectPackageID: r.uint32le,
  effectGroupID: r.uint32le,
  stateType: r.uint32le
});
