import r from 'restructure';

import Entity from '../entity';

export default Entity({
  ID: r.int32le,
  SwingType: r.int32le,
  Crit: r.int32le,
  SoundID: r.int32le,
});
