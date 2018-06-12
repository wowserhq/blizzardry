import r from 'restructure';

import Entity from '../entity';
import StringRef from '../string-ref';

export default Entity({
  id: r.uint32le,
  name: StringRef,
  unknowns: new r.Reserved(r.uint32le, 2),
  soundID: r.uint32le,
  flags: r.uint32le,
});
