'use strict';

var r = require('restructure');
var Entity = require('../entity');
var LocalizedStringRef = require('../localized-string-ref');

module.exports = Entity({
  id: r.uint32le,
  conditionID: r.uint32le,
  male: LocalizedStringRef,
  female: LocalizedStringRef,
  titleMask: r.uint32le
});