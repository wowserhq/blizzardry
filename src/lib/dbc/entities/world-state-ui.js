const r = require('restructure');
const Entity = require('../entity');
const LocalizedStringRef = require('../localized-string-ref');
const StringRef = require('../string-ref');

module.exports = Entity({
  id: r.uint32le,
  mapID: r.int32le,
  zoneID: r.uint32le,
  phase: r.uint32le,
  text: LocalizedStringRef,
  description: LocalizedStringRef,
  state: r.int32le,
  worldState: r.uint32le,
  type: r.uint32le,
  icon: StringRef,
  tooltip: LocalizedStringRef,
  ui: StringRef,
  stateVariables: new r.Array(r.uint32le, 3)
});
