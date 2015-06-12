'use strict';

var r = require('restructure');
var Entity = require('../entity');

module.exports = Entity({
  raceID: r.uint8,
  classID: r.uint8
});