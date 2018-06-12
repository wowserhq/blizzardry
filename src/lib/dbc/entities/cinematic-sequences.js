import r from 'restructure';

import Entity from '../entity';

export default Entity({
  id: r.uint32le,
  soundID: r.uint32le,
  cameraIDs: new r.Array(r.uint32le, 8),
});
