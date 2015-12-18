import r from 'restructure';

import Entity from '../entity';

export default Entity({
  id: r.uint32le,
  daySoundID: r.uint32le,
  nightSoundID: r.uint32le
});
