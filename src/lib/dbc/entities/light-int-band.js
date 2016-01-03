import r from 'restructure';

import Entity from '../entity';

export default Entity({
  id: r.uint32le,
  entriesCount: r.uint32le,
  times: new r.Array(r.uint32le, 16),
  values: new r.Array(r.uint32le, 16)
});
