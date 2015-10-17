import r from 'restructure';
import Entity from '../entity';

export default Entity({
  id: r.uint32le,
  spellIDs: new r.Array(r.uint32le, 10),
  flags: r.uint32le
});
