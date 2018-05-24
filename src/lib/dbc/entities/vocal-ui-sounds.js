import r from 'restructure';

import Entity from '../entity';

export default Entity({
  id: r.uint32le,
  uniqueID: r.uint32le,
  raceID: r.uint32le,
  maleNormalSoundID: r.uint32le,
  femaleNormalSoundID: r.uint32le,
  malePissedSoundID: r.uint32le,
  femalePissedSoundID: r.uint32le,
});
