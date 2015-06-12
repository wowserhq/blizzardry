'use strict';

var r = require('restructure');
var Entity = require('../entity');
var LocalizedStringRef = require('../localized-string-ref');
var StringRef = require('../string-ref');

module.exports = Entity({
  id: r.uint32le,
  name: LocalizedStringRef,
  spellIconID: r.uint32le,
  raceMask: r.uint32le,
  classMask: r.uint32le,
  creatureFamilyMask: r.uint32le,
  order: r.uint32le,
  backgroundFile: StringRef
});