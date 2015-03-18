var Entity, LocalizedStringRef, r;

r = require('restructure');

Entity = require('../entity');

LocalizedStringRef = require('../localized-string-ref');

module.exports = Entity({
  id: r.uint32le,
  itemIDs: new r.Array(r.uint32le, 8),
  description: LocalizedStringRef
});
