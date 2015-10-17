import r from 'restructure';
import Entity from '../entity';
import LocalizedStringRef from '../localized-string-ref';
import StringRef from '../string-ref';

export default Entity({
  id: r.uint32le,
  type: r.uint32le,
  value: r.uint32le,
  fallbackID: r.uint32le,
  raceMask: r.uint32le,
  internalName: StringRef,
  name: LocalizedStringRef,
  lockID: r.uint32le
});
