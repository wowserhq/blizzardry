'use strict';

var r = require('restructure');
var Entity = require('../entity');
var LocalizedStringRef = require('../localized-string-ref');
var StringRef = require('../string-ref');

module.exports = Entity({
  id: r.uint32le,
  mapID: r.uint32le,
  difficulty: r.uint32le,
  message: LocalizedStringRef,
  raidDuration: r.uint32le,
  maxPlayers: r.uint32le,
  name: StringRef
});