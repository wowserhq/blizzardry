const r = require('restructure');
const Entity = require('../entity');

module.exports = Entity({
  id: r.uint32le,
  raceID: r.uint8,
  classID: r.uint8,
  gender: r.uint8,
  outfitID: r.uint8,

  itemIDs: new r.Array(r.int32le, 24),
  displayInfoIDs: new r.Array(r.int32le, 24),
  inventoryTypes: new r.Array(r.int32le, 24)
});
