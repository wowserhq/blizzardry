var Entity, LocalizedStringRef, r;

r = require('restructure');

Entity = require('../entity');

LocalizedStringRef = require('../localized-string-ref');

module.exports = Entity({
  id: r.uint32le,
  factionID: r.uint32le,
  auctionFee: r.uint32le,
  despositTax: r.uint32le,
  name: LocalizedStringRef
});
