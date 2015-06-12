'use strict';

var r = require('restructure');
var Entity = require('../entity');
var LocalizedStringRef = require('../localized-string-ref');

module.exports = Entity({
  id: r.uint32le,
  name: LocalizedStringRef,
  thresholds: new r.Array(r.uint32le, 3),
  damageModifiers: new r.Array(r.floatle, 3)
});