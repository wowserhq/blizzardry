'use strict';

var r = require('restructure');
var Entity = require('../entity');
var LocalizedStringRef = require('../localized-string-ref');

module.exports = Entity({
  id: r.uint32le,
  localeMask: r.uint32le,
  charsetMask: r.uint32le,
  flags: r.uint32le,
  name: LocalizedStringRef
});