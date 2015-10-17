import r from 'restructure';
import Entity from '../entity';

export default Entity({
  id: r.uint32le,
  entryIDs: new r.Array(r.uint32le, 6),
  nextGroupID: r.uint32le
});
