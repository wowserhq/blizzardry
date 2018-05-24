import r from 'restructure';

import Entity from '../entity';
import StringRef from '../string-ref';

export default Entity({
  id: r.uint32le,
  ambienceID: r.uint32le,
  effectType: r.uint32le,
  unknown1: new r.Reserved(r.floatle),
  effectColors: new r.Array(r.floatle, 3),
  effectTexture: StringRef,
});
