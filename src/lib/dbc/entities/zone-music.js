import r from 'restructure';

import Entity from '../entity';
import StringRef from '../string-ref';

export default Entity({
  id: r.uint32le,
  name: StringRef,
  silenceIntervalMinDay: r.uint32le,
  silenceIntervalMinNight: r.uint32le,
  silenceIntervalMaxDay: r.uint32le,
  silenceIntervalMaxNight: r.uint32le,
  dayMusicID: r.uint32le,
  nightMusicID: r.uint32le
});
