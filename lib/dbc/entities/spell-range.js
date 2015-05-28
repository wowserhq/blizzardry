'use strict';

var r = require('restructure');
var Entity = require('../entity');
var LocalizedStringRef = require('../localized-string-ref');

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