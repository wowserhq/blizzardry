'use strict';

var r = require('restructure');
var Entity = require('../entity');

module.exports = Entity({
  id: r.uint32le,
  indicatorID: r.uint32le,
  seatIndex: r.uint32le,
  x: r.floatle,
  y: r.floatle
});