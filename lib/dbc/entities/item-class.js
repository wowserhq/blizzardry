'use strict';

var r = require('restructure');
var Entity = require('../entity');
var LocalizedStringRef = require('../localized-string-ref');

module.exports = Entity({
  id: r.uint32le,
  subClassID: r.uint32le,
  isWeapon: new r.Boolean(r.uint32le),
  name: LocalizedStringRef
});