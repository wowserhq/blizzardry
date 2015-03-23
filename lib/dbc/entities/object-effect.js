var Entity, StringRef, Vec3Float, r;

r = require('restructure');

Entity = require('../entity');

StringRef = require('../string-ref');

Vec3Float = require('../../types').Vec3Float;

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
