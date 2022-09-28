import r from 'restructure';

import Entity from '../entity';

export default Entity({
  ID: r.int32le,
  PathID: r.int32le,
  Locx: new r.Array(r.floatle, 8),
  Locy: new r.Array(r.floatle, 8),
  LegIndex: r.int32le,
});
