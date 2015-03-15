var Entity, LocalizedStringRef, StringRef, r;

r = require('restructure');

Entity = require('../entity');

LocalizedStringRef = require('../localized-string-ref');

StringRef = require('../string-ref');

module.exports = Entity({
  id: r.uint32le,
  skip: new r.Reserved(r.uint32le),
  powerType: r.uint32le,
  petType: r.uint32le,
  name: LocalizedStringRef,
  nameFemale: LocalizedStringRef,
  nameMale: LocalizedStringRef,
  filename: StringRef,
  spellClassSet: r.uint32le,
  flags: r.uint32le,
  cameraID: r.uint32le,
  expansionID: r.uint32le
});
