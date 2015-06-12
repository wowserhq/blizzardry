'use strict';

var r = require('restructure');
var Entity = require('../entity');
var StringRef = require('../string-ref');

module.exports = Entity({
  id: r.uint32le,
  textures: new r.Array(StringRef, 3),
  models: new r.Array(StringRef, 4)
});