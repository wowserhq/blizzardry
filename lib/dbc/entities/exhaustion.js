'use strict';

var r = require('restructure');
var Entity = require('../entity');
var LocalizedStringRef = require('../localized-string-ref');

module.exports = Entity({
  id: r.uint32le,
  xp: r.uint32le,
  factor: r.floatle,
  outdoorHours: r.floatle,
  innHours: r.floatle,
  name: LocalizedStringRef,
  threshold: r.floatle
});