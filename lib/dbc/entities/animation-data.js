'use strict';

var r = require('restructure');
var Entity = require('../entity');
var StringRef = require('../string-ref');

module.exports = Entity({
  id: r.uint32le,
  name: StringRef,
  weaponFlags: r.uint32le,
  bodyFlags: r.uint32le,
  flags: r.uint32le,
  fallbackID: r.uint32le,
  behaviorID: r.uint32le,
  behaviorTier: r.uint32le
});