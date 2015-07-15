const r = require('restructure');
const Entity = require('../entity');
const LocalizedStringRef = require('../localized-string-ref');

module.exports = Entity({
  id: r.uint32le,
  itemIDs: new r.Array(r.uint32le, 8),
  description: LocalizedStringRef,
});
