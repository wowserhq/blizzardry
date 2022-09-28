import r from 'restructure';

import Entity from '../entity';

export default Entity({
  ID: r.int32le,
  Epic: new r.Array(r.int32le, 5),
  Superior: new r.Array(r.int32le, 5),
  Good: new r.Array(r.int32le, 5),
});
