'use strict';

var r = require('restructure');
var Entity = require('../entity');
var LocalizedStringRef = require('../localized-string-ref');

module.exports = Entity({
  id: r.uint32le,
  name: LocalizedStringRef,
  categoryID: r.uint32le,
  categoryMask: r.uint32le
});