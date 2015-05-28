'use strict';

var r = require('restructure');
var Entity = require('../entity');
var LocalizedStringRef = require('../localized-string-ref');

module.exports = Entity({
  id: r.uint32le,
  parentID: r.int32le,
  name: LocalizedStringRef,
  order: r.uint32le
});