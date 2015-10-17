import r from 'restructure';
import Entity from '../entity';

export default Entity({
  id: r.uint32le,
  radius: r.floatle,
  radiusPerLevel: r.floatle,
  maxRadius: r.floatle
});
