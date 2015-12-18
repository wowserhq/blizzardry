import r from 'restructure';

import Entity from '../entity';

export default Entity({
  id: r.uint32le,
  itemID: r.uint32le,
  categoryID: r.uint32le,
  bitIndex: r.uint32le
});
