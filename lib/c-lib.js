var FILE, bool, ffi, ref, string, voidPtr;

ffi = require('ffi');

ref = require('ref');

bool = ref.types.bool;

string = ref.types.CString;

voidPtr = ref.refType(ref.types["void"]);

FILE = voidPtr;

module.exports = new ffi.Library('libc', {
  fopen: [FILE, [string, string]],
  fclose: [bool, [FILE]]
});
