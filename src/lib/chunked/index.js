import r from 'restructure';
import xtend from 'xtend';
import MVER from './mver';

export default function(fields) {
  const definition = xtend({
    MVER: MVER,
    version: function() {
      return this.MVER.version;
    }
  }, fields);
  return new r.Struct(definition);
}
