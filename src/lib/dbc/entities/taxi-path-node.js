const r = require('restructure');
const Entity = require('../entity');
const {Vec3Float} = require('../../types');

module.exports = Entity({
  id: r.uint32le,
  pathID: r.uint32le,
  nodeIndex: r.uint32le,
  mapID: r.uint32le,
  position: Vec3Float,
  flags: r.uint32le,
  delay: r.uint32le,
  arrivalEventID: r.uint32le,
  departureEventID: r.uint32le
});
