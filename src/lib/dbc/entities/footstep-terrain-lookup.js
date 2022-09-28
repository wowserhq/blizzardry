import r from 'restructure';

import Entity from '../entity';

export default Entity({
  ID: r.int32le,
  CreatureFootstepID: r.int32le,
  TerrainSoundID: r.int32le,
  SoundID: r.int32le,
  SoundIDSplash: r.int32le,
});
