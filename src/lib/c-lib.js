const ffi = require('ffi');
const ref = require('ref');

const {bool} = ref.types;
const string = ref.types.CString;

const voidPtr = ref.refType(ref.types.void);

const FILE = voidPtr;

const library = (process.platform.match(/win32/)) ? 'msvcr120' : 'libc';

module.exports = new ffi.Library(library, {
  fopen: [FILE, [string, string]],
  fclose: [bool, [FILE]]
});
