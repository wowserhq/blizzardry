const r = require('restructure');
const Entity = require('../entity');

module.exports = Entity({
  id: r.uint32le,
  gemColors: new r.Array(r.uint8, 5),
  operands: new r.Array(r.uint32le, 5),
  comparators: new r.Array(r.uint8, 5),
  compareColors: new r.Array(r.uint8, 5),
  values: new r.Array(r.uint32le, 5),
  logicalOperands: new r.Array(r.uint8, 5)
});
