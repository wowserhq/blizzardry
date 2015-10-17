import r from 'restructure';
import Entity from '../entity';
import LocalizedStringRef from '../localized-string-ref';
import StringRef from '../string-ref';

export default Entity({
  id: r.uint32le,
  name: LocalizedStringRef,
  mask: r.uint32le,
  immunityPossible: new r.Boolean(r.uint32le),
  internalName: StringRef
});
