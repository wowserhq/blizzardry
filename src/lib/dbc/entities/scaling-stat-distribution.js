import r from 'restructure';

import Entity from '../entity';

export default Entity({
  ID: r.int32le,
  StatID: new r.Array(r.int32le, 1),
  Bonus: new r.Array(r.int32le, 1),
  Maxlevel: r.int32le,
});
