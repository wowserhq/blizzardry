import r from 'restructure';
import xtend from 'xtend';

export default function (fields) {
  const definition = xtend({
    id: new r.String(4),
    size: r.uint32le,
  }, fields);
  return new r.Struct(definition);
}
