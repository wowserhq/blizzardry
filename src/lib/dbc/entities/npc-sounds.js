import r from 'restructure';
import Entity from '../entity';

export default Entity({
  id: r.uint32le,
  greetingSoundID: r.int32le,
  farewellSoundID: r.int32le,
  pissedSoundID: r.int32le,
  unknown: new r.Reserved(r.int32le)
});
