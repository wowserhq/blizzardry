import r from 'restructure';

import Entity from '../entity';

export default Entity({
  ID: r.int32le,
  Data: r.floatle,
});
