'use strict';

var r = require('restructure');
var Entity = require('../entity');
var LocalizedStringRef = require('../localized-string-ref');

module.exports = Entity({
  classID: r.uint32le,
  subClassID: r.uint32le,
  name: LocalizedStringRef
});