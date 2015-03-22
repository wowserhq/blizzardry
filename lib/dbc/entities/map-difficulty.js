var Entity, LocalizedStringRef, StringRef, r;

r = require('restructure');

Entity = require('../entity');

LocalizedStringRef = require('../localized-string-ref');

StringRef = require('../string-ref');

module.exports = Entity({
  id: r.uint32le,
  mapID: r.uint32le,
  difficulty: r.uint32le,
  message: LocalizedStringRef,
  raidDuration: r.uint32le,
  maxPlayers: r.uint32le,
  name: StringRef
});
