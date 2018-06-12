import r from 'restructure';

import Entity from '../entity';

export default Entity({
  id: r.uint32le,
  raceID: r.uint32le,
  gender: r.uint32le,
  hairType: r.uint32le,
  geoset: r.uint32le,
  bald: new r.Boolean(r.uint32le),
});
