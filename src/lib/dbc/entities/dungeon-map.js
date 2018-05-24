import r from 'restructure';

import Entity from '../entity';

export default Entity({
  id: r.uint32le,
  mapID: r.uint32le,
  layer: r.uint32le,
  coordinates: new r.Array(r.floatle, 4),
  areaID: r.uint32le,
});
