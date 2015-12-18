import r from 'restructure';

import Entity from '../entity';

export default Entity({
  id: r.uint32le,
  skillValues: new r.Array(r.uint32le, 16),
  maxValues: new r.Array(r.uint32le, 16)
});
