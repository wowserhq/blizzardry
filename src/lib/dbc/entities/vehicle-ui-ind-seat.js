import r from 'restructure';

import Entity from '../entity';

export default Entity({
  id: r.uint32le,
  indicatorID: r.uint32le,
  seatIndex: r.uint32le,
  x: r.floatle,
  y: r.floatle,
});
