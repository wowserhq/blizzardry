import r from 'restructure';

import Entity from '../entity';
import StringRef from '../string-ref';

export default Entity({
  id: r.uint32le,
  ambienceID: r.uint32le,
  effectType: r.uint32le,
  effectColors: new r.Array(r.floatle, 3),
  effectTexture: StringRef
});
