import r from 'restructure';

import Entity from '../entity';
import StringRef from '../string-ref';

export default Entity({
  ID: r.int32le,
  Name: StringRef,
  NumRows: r.int32le,
  NumColumns: r.int32le,
});
