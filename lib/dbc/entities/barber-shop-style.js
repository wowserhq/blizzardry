'use strict';

var r = require('restructure');
var Entity = require('../entity');
var LocalizedStringRef = require('../localized-string-ref');

module.exports = Entity({
  id: r.uint32le,
  type: r.uint32le,
  name: LocalizedStringRef,
  additionalName: LocalizedStringRef,
  costModifier: r.floatle,
  raceID: r.uint32le,
  gender: r.uint32le,
  hairID: r.uint32le
});