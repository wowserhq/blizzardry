import r from 'restructure';

import Entity from '../entity';
import LocalizedStringRef from '../localized-string-ref';

export default Entity({
  id: r.uint32le,
  instanceIDs: new r.Array(r.int32le, 8),
  type: r.uint32le,
  groupsAllowed: new r.Boolean(r.uint32le),
  name: LocalizedStringRef,
  maxGroupSize: r.uint32le,
  unknown: new r.Reserved(r.uint32le, 1),
  minLevel: r.uint32le,
  maxLevel: r.uint32le,
});
