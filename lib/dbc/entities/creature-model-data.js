'use strict';

var r = require('restructure');
var Entity = require('../entity');
var StringRef = require('../string-ref');

module.exports = Entity({
  id: r.uint32le,
  flags: r.uint32le,
  file: StringRef,
  sizeClass: r.uint32le,
  scale: r.floatle,
  bloodID: r.int32le,

  skips: new r.Reserved(r.uint32le, 22)
});