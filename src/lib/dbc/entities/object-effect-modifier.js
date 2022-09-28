import r from 'restructure';

import Entity from '../entity';

export default Entity({
  ID: r.int32le,
  InputType: r.int32le,
  MapType: r.int32le,
  OutputType: r.int32le,
  Param: new r.Array(r.floatle, 4),
});
