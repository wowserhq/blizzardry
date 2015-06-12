'use strict';

var r = require('restructure');
var Chunk = require('../chunked/chunk');
var Chunked = require('../chunked');
var SkipChunk = require('../chunked/skip-chunk');

var MPHD = Chunk({
  flags: r.uint32le,
  skip: new r.Reserved(r.uint32le, 7)
});

var Tile = new r.Struct({
  flags: r.uint32le,
  skip: new r.Reserved(r.uint32le)
});

var MAIN = Chunk({
  tiles: new r.Array(Tile, 4096)
});

module.exports = Chunked({
  MPHD: MPHD,
  MAIN: MAIN,
  MWMO: require('../chunked/mwmo'),
  // TODO: Optional MODF chunk

  flags: function flags() {
    return this.MPHD.flags;
  },

  tiles: function tiles() {
    return this.MAIN.tiles.map(function (tile) {
      return tile.flags;
    });
  }
});