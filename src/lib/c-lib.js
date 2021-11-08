import ffi from 'ffi-napi';
import ref from 'ref-napi';

const { bool } = ref.types;
const string = ref.types.CString;

const voidPtr = ref.refType(ref.types.void);

const FILE = voidPtr;

const library = (process.platform.match(/win32/)) ? 'msvcr120' : 'libc';

export default new ffi.Library(library, {
  fopen: [FILE, [string, string]],
  fclose: [bool, [FILE]],
});
