import r from 'restructure';

import Entity from '../entity';
import LocalizedStringRef from '../localized-string-ref';

export default Entity({
  id: r.uint32le,
  name: LocalizedStringRef,
  categoryID: r.uint32le,
  categoryMask: r.uint32le
});
