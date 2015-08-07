const r = require('restructure');
const Chunk = require('../chunked/chunk');
const Chunked = require('../chunked');

const MPHD = Chunk({
  flags: r.uint32le,
  skip: new r.Reserved(r.uint32le, 7)
});

const Tile = new r.Struct({
  flags: r.uint32le,
  skip: new r.Reserved(r.uint32le)
});

const MAIN = Chunk({
  tiles: new r.Array(Tile, 4096)
});

module.exports = Chunked({
  MPHD: MPHD,
  MAIN: MAIN,
  MWMO: require('../chunked/mwmo'),
  // TODO: Optional MODF chunk

  flags: function() {
    return this.MPHD.flags;
  },

  tiles: function() {
    return this.MAIN.tiles.map(function(tile) {
      return tile.flags;
    });
  }
});
