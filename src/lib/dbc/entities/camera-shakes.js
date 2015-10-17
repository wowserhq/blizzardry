import r from 'restructure';
import Entity from '../entity';

export default Entity({
  id: r.uint32le,
  type: r.uint32le,
  direction: r.uint32le,
  amplitude: r.floatle,
  frequency: r.floatle,
  duration: r.floatle,
  phase: r.floatle,
  coefficient: r.floatle
});
