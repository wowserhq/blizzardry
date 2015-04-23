var BLP, FILE, bool, ffi, ref, ref1, uint32, uint8, voidPtr;

ffi = require('ffi');

ref = require('ref');

ref1 = ref.types, bool = ref1.bool, uint8 = ref1.uint8, uint32 = ref1.uint32;

voidPtr = ref.refType(ref.types["void"]);

BLP = voidPtr;

FILE = voidPtr;

module.exports = new ffi.Library('libblp', {
  blp_convert: [voidPtr, [FILE, BLP, uint8]],
  blp_height: [uint32, [BLP, uint8]],
  blp_nbMipLevels: [uint32, [BLP]],
  blp_processFile: [BLP, [FILE]],
  blp_release: [bool, [BLP]],
  blp_version: [uint8, [BLP]],
  blp_width: [uint32, [BLP, uint8]]
});
