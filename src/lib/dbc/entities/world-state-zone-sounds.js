import r from 'restructure';

import Entity from '../entity';

export default Entity({
  id: r.uint32le,
  value: r.uint32le,
  areaID: r.uint32le,
  wmoAreaID: r.uint32le,
  introMusicID: r.uint32le,
  musicID: r.uint32le,
  soundAmbienceID: r.uint32le,
  soundProviderPreferenceID: r.uint32le,
});
