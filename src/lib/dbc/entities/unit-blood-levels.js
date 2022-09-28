import r from 'restructure';

import Entity from '../entity';

export default Entity({
  ID: r.int32le,
  Violencelevel: new r.Array(r.int32le, 3),
});
