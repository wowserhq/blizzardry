ffi = require('ffi')
ref = require('ref')

{bool, uint8, uint32} = ref.types

voidPtr = ref.refType(ref.types.void)

BLP = voidPtr
FILE = voidPtr

module.exports = new ffi.Library('libblp',
  blp_height:      [uint32, [BLP, uint8]]
  blp_processFile: [BLP, [FILE]]
  blp_release:     [bool, [BLP]]
  blp_version:     [uint8, [BLP]]
  blp_width:       [uint32, [BLP, uint8]]
)
