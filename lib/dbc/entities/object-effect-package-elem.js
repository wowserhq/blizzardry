'use strict';

var r = require('restructure');
var Entity = require('../entity');

module.exports = Entity({
  id: r.uint32le,
  effectPackageID: r.uint32le,
  effectGroupID: r.uint32le,
  stateType: r.uint32le
});