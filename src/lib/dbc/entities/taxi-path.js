import r from 'restructure';
import Entity from '../entity';

export default Entity({
  id: r.uint32le,
  originID: r.uint32le,
  destinationID: r.int32le,
  cost: r.uint32le
});
