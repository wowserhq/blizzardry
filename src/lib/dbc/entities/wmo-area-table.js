const r = require('restructure');
const Entity = require('../entity');
const LocalizedStringRef = require('../localized-string-ref');

module.exports = Entity({
  id: r.uint32le,
  rootID: r.uint32le,
  nameSetID: r.uint32le,
  groupID: r.int32le,

  unknowns: new r.Reserved(r.uint32le, 5),

  flags: r.uint32le,
  areaID: r.uint32le,
  name: LocalizedStringRef
});
