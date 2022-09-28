import r from 'restructure';

import Entity from '../entity';
import StringRef from '../string-ref';

export default Entity({
  ID: r.int32le,
  Doodadpath: StringRef,
  Flags: r.int32le,
});
