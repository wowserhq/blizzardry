import r from 'restructure';

import Entity from '../entity';

export default Entity({
  id: r.uint32le,
  visualEffectIDs: new r.Array(r.uint32le, 5),
});
