var Entity, LocalizedStringRef, StringRef, r;

r = require('restructure');

Entity = require('../entity');

StringRef = require('../string-ref');

LocalizedStringRef = require('../localized-string-ref');

module.exports = Entity({
  id: r.uint32le,
  mask: r.uint32le,
  name: StringRef,
  title: LocalizedStringRef
});
