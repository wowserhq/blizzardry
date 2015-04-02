var Entity, LocalizedStringRef, r;

r = require('restructure');

Entity = require('../entity');

LocalizedStringRef = require('../localized-string-ref');

module.exports = Entity({
  id: r.uint32le,
  minRangeHostile: r.floatle,
  minRangeFriendly: r.floatle,
  maxRangeHostile: r.floatle,
  maxRangeFriendly: r.floatle,
  type: r.uint32le,
  description: LocalizedStringRef,
  name: LocalizedStringRef
});
