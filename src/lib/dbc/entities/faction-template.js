import r from 'restructure';
import Entity from '../entity';

export default Entity({
  id: r.uint32le,
  factionID: r.uint32le,
  unknown: new r.Reserved(r.uint32le),
  groupMask: r.uint32le,
  friendlyMask: r.uint32le,
  hostileMask: r.uint32le,
  relatedFactionIDs: new r.Array(r.uint32le, 8)
});
