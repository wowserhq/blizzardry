import r from 'restructure';

import Entity from '../entity';

export default Entity({
  id: r.uint32le,
  price: r.uint32le,
});
