'use strict';

var r = require('restructure');
var Entity = require('../entity');
var StringRef = require('../string-ref');

module.exports = Entity({
  id: r.uint32le,
  name: StringRef,
  emoteID: r.uint32le,
  emoteTextDataIDs: new r.Array(r.uint32le, 16)
});