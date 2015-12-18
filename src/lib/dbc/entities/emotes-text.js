import r from 'restructure';

import Entity from '../entity';
import StringRef from '../string-ref';

export default Entity({
  id: r.uint32le,
  name: StringRef,
  emoteID: r.uint32le,
  emoteTextDataIDs: new r.Array(r.uint32le, 16)
});
