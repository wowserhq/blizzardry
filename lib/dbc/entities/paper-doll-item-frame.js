'use strict';

var r = require('restructure');
var Entity = require('../entity');
var StringRef = require('../string-ref');

module.exports = Entity({
  name: StringRef,
  slotIcon: StringRef,
  slotNumber: r.uint32le
});