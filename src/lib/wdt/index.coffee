r = require('restructure')
Chunk = require('../chunked/chunk')
Chunked = require('../chunked')
SkipChunk = require('../chunked/skip-chunk')

MPHD = Chunk(
  flags: r.uint32le
  skip: new r.Reserved(r.uint32le, 7)
)

MapChunk = new r.Struct(
  flags: r.uint32le
  skip: new r.Reserved(r.uint32le)
)

MAIN = Chunk(
  chunks: new r.Array(MapChunk, 4096)
)

module.exports = Chunked(
  MPHD: MPHD
  MAIN: MAIN
  MWMO: require('../chunked/mwmo')
  # TODO: Optional MODF chunk

  flags: -> @MPHD.flags
  chunks: ->
    @MAIN.chunks.map (chunk) -> chunk.flags
)
