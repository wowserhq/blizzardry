var Entity, LocalizedStringRef, StringRef, r;

r = require('restructure');

Entity = require('../entity');

LocalizedStringRef = require('../localized-string-ref');

StringRef = require('../string-ref');

module.exports = Entity({
  id: r.uint32le,
  minScale: r.floatle,
  minScaleLevel: r.uint32le,
  maxScale: r.floatle,
  maxScaleLevel: r.uint32le,
  skillIDs: new r.Array(r.uint32le, 2),
  petFoodMask: r.uint32le,
  petTalentType: r.int32le,
  categoryEnumID: r.int32le,
  name: LocalizedStringRef,
  iconFile: StringRef
});
