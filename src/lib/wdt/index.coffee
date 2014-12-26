r = require('restructure')
{uint32le} = require('../types')
Chunk = require('../chunked/chunk')
Chunked = require('../chunked')
SkipChunk = require('../chunked/skip-chunk')

MPHD = Chunk(
  flags: uint32le
  skip: new r.Reserved(uint32le, 7)
)

MapChunk = new r.Struct(
  flags: uint32le
  skip: new r.Reserved(uint32le)
)

MAIN = Chunk(
  chunks: new r.Array(MapChunk, 4096)
)

module.exports = Chunked(
  MPHD: MPHD
  MAIN: MAIN
  MWMO: require('../chunked/mwmo')
  # TODO: Optional MODF chunk
)
