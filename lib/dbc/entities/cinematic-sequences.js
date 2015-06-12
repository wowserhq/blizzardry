'use strict';

var r = require('restructure');
var Entity = require('../entity');

module.exports = Entity({
  id: r.uint32le,
  soundID: r.uint32le,
  cameraIDs: new r.Array(r.uint32le, 8)
});