import r from 'restructure';

import Entity from '../entity';

export default Entity({
  id: r.int32le,
  race: r.int32le,
  gender: new r.Boolean(r.uint8),  // here is the issue (?)
  field03: new r.Boolean(r.uint8), // here is the issue (?)
  field04: new r.Array(r.int32le, 4),
});
