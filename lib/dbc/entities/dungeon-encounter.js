'use strict';

var r = require('restructure');
var Entity = require('../entity');
var LocalizedStringRef = require('../localized-string-ref');

module.exports = Entity({
  id: r.uint32le,
  mapID: r.uint32le,
  difficulty: r.uint32le,
  order: r.int32le,
  bit: r.uint32le,
  name: LocalizedStringRef,
  spellIconID: r.uint32le
});