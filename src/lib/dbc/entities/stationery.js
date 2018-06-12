import r from 'restructure';

import Entity from '../entity';
import StringRef from '../string-ref';

export default Entity({
  id: r.uint32le,
  itemID: r.uint32le,
  texture: StringRef,
  flags: r.uint32le,
});
