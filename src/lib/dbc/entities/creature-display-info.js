import r from 'restructure';

import Entity from '../entity';
import StringRef from '../string-ref';

export default Entity({
  id: r.uint32le,
  modelID: r.uint32le,
  soundID: r.uint32le,
  extraInfoID: r.uint32le,
  scale: r.floatle,
  opacity: r.uint32le,
  skin1: StringRef,
  skin2: StringRef,
  skin3: StringRef,
  portraitTexture: StringRef,

  skips: new r.Reserved(r.uint32le, 6)
});
