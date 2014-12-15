var BLP, FILE, bool, ffi, ref, uint32, uint8, voidPtr, _ref;

ffi = require('ffi');

ref = require('ref');

_ref = ref.types, bool = _ref.bool, uint8 = _ref.uint8, uint32 = _ref.uint32;

voidPtr = ref.refType(ref.types["void"]);

BLP = voidPtr;

FILE = voidPtr;

module.exports = new ffi.Library('libblp', {
  blp_height: [uint32, [BLP, uint8]],
  blp_nbMipLevels: [uint32, [BLP]],
  blp_processFile: [BLP, [FILE]],
  blp_release: [bool, [BLP]],
  blp_version: [uint8, [BLP]],
  blp_width: [uint32, [BLP, uint8]]
});
