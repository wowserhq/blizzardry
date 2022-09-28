import r from 'restructure';

import Entity from '../entity';

export default Entity({
  ID: r.int32le,
  LiquidTypeID: r.int32le,
  FluidSpeed: r.int32le,
  SoundID: r.int32le,
});
