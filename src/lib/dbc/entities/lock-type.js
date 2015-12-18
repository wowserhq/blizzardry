import r from 'restructure';

import Entity from '../entity';
import LocalizedStringRef from '../localized-string-ref';
import StringRef from '../string-ref';

export default Entity({
  id: r.uint32le,
  name: LocalizedStringRef,
  state: LocalizedStringRef,
  process: LocalizedStringRef,
  internalName: StringRef
});
