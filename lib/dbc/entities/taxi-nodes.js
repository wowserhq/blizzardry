var Entity, LocalizedStringRef, Vec3Float, r;

r = require('restructure');

Entity = require('../entity');

LocalizedStringRef = require('../localized-string-ref');

Vec3Float = require('../../types').Vec3Float;

module.exports = Entity({
  id: r.uint32le,
  mapID: r.uint32le,
  position: Vec3Float,
  name: LocalizedStringRef,
  mountCreatureIDs: new r.Array(r.uint32le, 2)
});
