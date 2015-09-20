const r = require('restructure');
const Entity = require('../entity');
const StringRef = require('../string-ref');
const { Vec3Float } = require('../../types');

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
