import r from 'restructure';
import Entity from '../entity';

export default Entity({
  id: r.uint32le,
  castTime: r.uint32le,
  castTimePerLevel: r.floatle,
  minCastTime: r.uint32le
});
