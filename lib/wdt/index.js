var Chunk, Chunked, MAIN, MPHD, SkipChunk, Tile, r;

r = require('restructure');

Chunk = require('../chunked/chunk');

Chunked = require('../chunked');

SkipChunk = require('../chunked/skip-chunk');

MPHD = Chunk({
  flags: r.uint32le,
  skip: new r.Reserved(r.uint32le, 7)
});

Tile = new r.Struct({
  flags: r.uint32le,
  skip: new r.Reserved(r.uint32le)
});

MAIN = Chunk({
  tiles: new r.Array(Tile, 4096)
});

module.exports = Chunked({
  MPHD: MPHD,
  MAIN: MAIN,
  MWMO: require('../chunked/mwmo'),
  flags: function() {
    return this.MPHD.flags;
  },
  tiles: function() {
    return this.MAIN.tiles.map(function(tile) {
      return tile.flags;
    });
  }
});
