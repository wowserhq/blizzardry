const r = require('restructure');
const Entity = require('../entity');

module.exports = Entity({
  id: r.uint32le,
  originID: r.uint32le,
  destinationID: r.int32le,
  cost: r.uint32le
});
