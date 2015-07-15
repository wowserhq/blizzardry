const r = require('restructure');
const Entity = require('../entity');

module.exports = Entity({
  id: r.uint32le,
  classID: r.uint32le,
  subClassID: r.uint32le,
  soundOverrideSubClassID: r.int32le,
  materialID: r.uint32le,
  displayInfoID: r.uint32le,
  inventorySlotID: r.uint32le,
  sheathID: r.uint32le
});
