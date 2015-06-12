'use strict';

var r = require('restructure');
var Entity = require('../entity');

module.exports = Entity({
  id: r.uint32le,
  uniqueID: r.uint32le,
  raceID: r.uint32le,
  maleNormalSoundID: r.uint32le,
  femaleNormalSoundID: r.uint32le,
  malePissedSoundID: r.uint32le,
  femalePissedSoundID: r.uint32le
});