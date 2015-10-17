import r from 'restructure';
import DBC from './';

export default function(fields) {
  const entity = new r.Struct(fields);
  entity.dbc = DBC.for(entity);
  return entity;
}
