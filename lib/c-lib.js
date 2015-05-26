'use strict';

var ffi = require('ffi');
var ref = require('ref');

var bool = ref.types.bool;

var string = ref.types.CString;

var voidPtr = ref.refType(ref.types['void']);

var FILE = voidPtr;

module.exports = new ffi.Library('libc', {
  fopen: [FILE, [string, string]],
  fclose: [bool, [FILE]]
});