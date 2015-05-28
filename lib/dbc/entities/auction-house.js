'use strict';

var r = require('restructure');
var Entity = require('../entity');
var LocalizedStringRef = require('../localized-string-ref');

module.exports = Entity({
  id: r.uint32le,
  factionID: r.uint32le,
  auctionFee: r.uint32le,
  despositTax: r.uint32le,
  name: LocalizedStringRef
});