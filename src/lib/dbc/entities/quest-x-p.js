import r from 'restructure';

import Entity from '../entity';

export default Entity({
  ID: r.int32le,
  Difficulty: new r.Array(r.int32le, 1),
});
