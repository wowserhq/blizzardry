import r from 'restructure';

import Entity from '../entity';
import LocalizedStringRef from '../localized-string-ref';

export default Entity({
  id: r.uint32le,
  index: r.int32le,
  raceMask: new r.Array(r.uint32le, 4),
  classMask: new r.Array(r.uint32le, 4),
  reputationBase: new r.Array(r.int32le, 4),
  reputationFlags: new r.Array(r.uint32le, 4),
  parentID: r.uint32le,
  parentMod: new r.Array(r.floatle, 2),
  parentCap: new r.Array(r.uint32le, 2),
  name: LocalizedStringRef,
  description: LocalizedStringRef,
});
