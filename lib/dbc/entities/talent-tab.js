var Entity, LocalizedStringRef, StringRef, r;

r = require('restructure');

Entity = require('../entity');

LocalizedStringRef = require('../localized-string-ref');

StringRef = require('../string-ref');

module.exports = Entity({
  id: r.uint32le,
  name: LocalizedStringRef,
  spellIconID: r.uint32le,
  raceMask: r.uint32le,
  classMask: r.uint32le,
  creatureFamilyMask: r.uint32le,
  order: r.uint32le,
  backgroundFile: StringRef
});
