import r from 'restructure';
import Entity from '../entity';
import LocalizedStringRef from '../localized-string-ref';

export default Entity({
  id: r.uint32le,
  localeMask: r.uint32le,
  charsetMask: r.uint32le,
  flags: r.uint32le,
  name: LocalizedStringRef
});
