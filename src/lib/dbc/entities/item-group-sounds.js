import r from 'restructure';

import Entity from '../entity';

export default Entity({
  ID: r.int32le,
  Sound: new r.Array(r.int32le, 4),
});
