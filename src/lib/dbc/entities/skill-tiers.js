const r = require('restructure');
const Entity = require('../entity');

module.exports = Entity({
  id: r.uint32le,
  skillValues: new r.Array(r.uint32le, 16),
  maxValues: new r.Array(r.uint32le, 16)
});
