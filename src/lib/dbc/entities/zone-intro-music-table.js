import r from 'restructure';

import Entity from '../entity';
import StringRef from '../string-ref';

export default Entity({
  id: r.uint32le,
  name: StringRef,
  soundID: r.uint32le,
  priority: r.uint32le,
  minDelay: r.uint32le,
});
