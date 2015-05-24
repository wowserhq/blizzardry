'use strict';

var r = require('restructure');
var Chunk = require('./chunk');

module.exports = Chunk({
  version: r.uint32le
});