'use strict';

var r = require('restructure');
var Entity = require('../entity');
var LocalizedStringRef = require('../localized-string-ref');

var _require = require('../../types');

var Vec3Float = _require.Vec3Float;

var Icon = new r.Struct({
  regular: r.uint32le,
  damaged: r.uint32le,
  destroyed: r.uint32le
});

module.exports = Entity({
  id: r.uint32le,
  importance: r.uint32le,

  neutralIcon: Icon,
  allianceIcon: Icon,
  hordeIcon: Icon,

  factionID: r.uint32le,
  position: Vec3Float,
  mapID: r.uint32le,
  flags: r.uint32le,
  areaID: r.uint32le,

  name: LocalizedStringRef,
  description: LocalizedStringRef,

  worldStateID: r.uint32le,
  worldMapLink: r.uint32le
});