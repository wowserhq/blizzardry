'use strict';

var r = require('restructure');
var Entity = require('../entity');
var StringRef = require('../string-ref');

module.exports = Entity({
  id: r.uint32le,
  name: StringRef,
  soundID: r.uint32le,
  priority: r.uint32le,
  minDelay: r.uint32le
});