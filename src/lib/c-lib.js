const ffi = require('ffi')
const ref = require('ref')

const {bool} = ref.types
const string = ref.types.CString

const voidPtr = ref.refType(ref.types.void)

const FILE = voidPtr

module.exports = new ffi.Library('libc', {
  fopen: [FILE, [string, string]],
  fclose: [bool, [FILE]]
})
