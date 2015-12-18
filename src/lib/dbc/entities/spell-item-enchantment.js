import r from 'restructure';

import Entity from '../entity';
import LocalizedStringRef from '../localized-string-ref';

export default Entity({
  id: r.uint32le,
  charges: r.uint32le,
  displayTypeIDs: new r.Array(r.uint32le, 3),
  minAmounts: new r.Array(r.uint32le, 3),
  maxAmounts: new r.Array(r.uint32le, 3),
  objectIDs: new r.Array(r.uint32le, 3),
  name: LocalizedStringRef,
  itemVisualID: r.uint32le,
  flags: r.uint32le,
  unknown: new r.Reserved(r.uint32le),
  conditionID: r.uint32le,
  skillLineID: r.uint32le,
  skillLevel: r.uint32le,
  requiredLevel: r.uint32le
});
