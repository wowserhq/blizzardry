'use strict';

var r = require('restructure');
var Entity = require('../entity');

module.exports = Entity({
  fileDataID: r.uint32le,
  resolution: r.uint32le
});