'use strict';

var ffi = require('ffi');
var ref = require('ref');

var _ref$types = ref.types;
var bool = _ref$types.bool;
var uint8 = _ref$types.uint8;
var uint32 = _ref$types.uint32;

var voidPtr = ref.refType(ref.types['void']);

var BLP = voidPtr;
var FILE = voidPtr;

module.exports = new ffi.Library('libblp', {
  blp_convert: [voidPtr, [FILE, BLP, uint8]],
  blp_height: [uint32, [BLP, uint8]],
  blp_nbMipLevels: [uint32, [BLP]],
  blp_processFile: [BLP, [FILE]],
  blp_release: [bool, [BLP]],
  blp_version: [uint8, [BLP]],
  blp_width: [uint32, [BLP, uint8]]
});