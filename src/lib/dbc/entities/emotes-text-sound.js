import r from 'restructure';

import Entity from '../entity';

export default Entity({
  id: r.uint32le,
  emoteTextID: r.uint32le,
  raceID: r.uint32le,
  gender: r.uint32le,
  soundID: r.uint32le,
});
