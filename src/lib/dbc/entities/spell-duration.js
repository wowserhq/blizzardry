import r from 'restructure';
import Entity from '../entity';

export default Entity({
  id: r.uint32le,
  baseDuration: r.uint32le,
  perLevel: r.uint32le,
  maxDuration: r.uint32le
});
