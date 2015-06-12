'use strict';

var r = require('restructure');
var Entity = require('../entity');
var LocalizedStringRef = require('../localized-string-ref');
var StringRef = require('../string-ref');

module.exports = Entity({
  id: r.uint32le,
  name: LocalizedStringRef,
  mask: r.uint32le,
  immunityPossible: new r.Boolean(r.uint32le),
  internalName: StringRef
});