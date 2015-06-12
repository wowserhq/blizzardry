'use strict';

var r = require('restructure');
var Entity = require('../entity');

module.exports = Entity({
  id: r.uint32le,
  originID: r.uint32le,
  destinationID: r.int32le,
  cost: r.uint32le
});