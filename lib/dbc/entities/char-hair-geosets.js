var Entity, r;

r = require('restructure');

Entity = require('../entity');

module.exports = Entity({
  id: r.uint32le,
  raceID: r.uint32le,
  gender: r.uint32le,
  hairType: r.uint32le,
  geoset: r.uint32le,
  bald: r.uint32le
});
