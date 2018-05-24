import r from 'restructure';

import Entity from '../entity';

export default Entity({
  id: r.uint32le,
  flags: r.uint32le,
  foleySoundID: r.uint32le,
  sheathSoundID: r.uint32le,
  unsheathSoundID: r.uint32le,
});
