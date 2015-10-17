import r from 'restructure';
import Entity from '../entity';

export default Entity({
  id: r.uint32le,
  filterID: r.uint32le,
  order: r.uint32le,
  type: r.uint32le,
  parameters: new r.Array(r.floatle, 9)
});
