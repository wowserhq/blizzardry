import r from 'restructure';

import Entity from '../entity';
import StringRef from '../string-ref';

export default Entity({
  id: r.uint32le,
  raceID: r.uint32le,
  gender: r.uint32le,
  generalType: r.uint32le,
  textures: new r.Array(StringRef, 3),
  flags: r.uint32le,
  type: r.uint32le,
  variation: r.uint32le,
});
