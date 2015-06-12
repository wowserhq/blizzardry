'use strict';

var r = require('restructure');
var Entity = require('../entity');
var LocalizedStringRef = require('../localized-string-ref');
var StringRef = require('../string-ref');

module.exports = Entity({
  id: r.uint32le,
  name: StringRef,
  spellItemEnchantmentIDs: new r.Array(r.uint32le, 5),
  suffix: LocalizedStringRef
});