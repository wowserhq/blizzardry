import r from 'restructure';

import Entity from '../entity';

export default Entity({
  ID: r.int32le,
  Type: r.int32le,
  Tooltip: r.int32le,
});
