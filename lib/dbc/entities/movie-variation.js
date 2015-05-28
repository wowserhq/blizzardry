'use strict';

var r = require('restructure');
var Entity = require('../entity');

module.exports = Entity({
  id: r.uint32le,
  movieID: r.uint32le,
  fileDataID: r.uint32le
});