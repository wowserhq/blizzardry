import r from 'restructure';

import Entity from '../entity';

export default Entity({
  ID: r.int32le,
  Start: new r.Array(r.int32le, 3),
  Mid: new r.Array(r.int32le, 3),
  End: new r.Array(r.int32le, 3),
});
