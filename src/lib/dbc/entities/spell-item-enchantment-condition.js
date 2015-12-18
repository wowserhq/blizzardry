import r from 'restructure';

import Entity from '../entity';

export default Entity({
  id: r.uint32le,
  gemColors: new r.Array(r.uint8, 5),
  operands: new r.Array(r.uint32le, 5),
  comparators: new r.Array(r.uint8, 5),
  compareColors: new r.Array(r.uint8, 5),
  values: new r.Array(r.uint32le, 5),
  logicalOperands: new r.Array(r.uint8, 5)
});
