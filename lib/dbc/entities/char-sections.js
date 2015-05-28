'use strict';

var r = require('restructure');
var Entity = require('../entity');
var StringRef = require('../string-ref');

module.exports = Entity({
  id: r.uint32le,
  raceID: r.uint32le,
  gender: r.uint32le,
  generalType: r.uint32le,
  textures: new r.Array(StringRef, 3),
  flags: r.uint32le,
  type: r.uint32le,
  variation: r.uint32le
});