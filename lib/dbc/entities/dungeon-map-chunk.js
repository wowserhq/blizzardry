'use strict';

var r = require('restructure');
var Entity = require('../entity');

module.exports = Entity({
  id: r.uint32le,
  mapID: r.uint32le,
  wmoAreaID: r.uint32le,
  dungeonMapID: r.uint32le,
  minZ: r.floatle
});