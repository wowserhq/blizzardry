import r from 'restructure';

import Entity from '../entity';

export default Entity({
  raceID: r.uint32le,
  gender: r.uint32le,
  specificID: r.uint32le,
  geosetIDs: new r.Array(r.uint32le, 5)
});
