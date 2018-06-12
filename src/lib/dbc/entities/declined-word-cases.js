import r from 'restructure';

import Entity from '../entity';
import StringRef from '../string-ref';

export default Entity({
  id: r.uint32le,
  wordID: r.uint32le,
  case: r.uint32le,
  word: StringRef,
});
