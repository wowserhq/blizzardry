'use strict';

var r = require('restructure');
var Entity = require('../entity');
var StringRef = require('../string-ref');

var _require = require('../../types');

var Vec3Float = _require.Vec3Float;

module.exports = Entity({
  id: r.uint32le,
  name: StringRef,
  effectGroupID: r.uint32le,
  triggerType: r.uint32le,
  eventType: r.uint32le,
  effectRecType: r.uint32le,
  effectRecID: r.uint32le,
  attachment: r.uint32le,
  offset: Vec3Float,
  effectModifierID: r.uint32le
});