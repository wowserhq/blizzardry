import r from 'restructure';
import Entity from '../entity';
import StringRef from '../string-ref';

export default Entity({
  id: r.uint32le,
  name: StringRef,
  file: StringRef,
  areaEffectSize: r.floatle,
  scale: r.floatle,
  minScale: r.floatle,
  maxScale: r.floatle
});
