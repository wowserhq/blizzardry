'use strict';

var r = require('restructure');
var Entity = require('../entity');
var StringRef = require('../string-ref');

module.exports = Entity({
  id: r.uint32le,
  name: StringRef,
  raceID: r.uint32le,
  gender: r.uint32le
});