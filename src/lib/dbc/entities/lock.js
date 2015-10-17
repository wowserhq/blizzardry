import r from 'restructure';
import Entity from '../entity';

export default Entity({
  id: r.uint32le,
  types: new r.Array(r.uint32le, 8),
  propertyIDs: new r.Array(r.uint32le, 8),
  requiredSkillIDs: new r.Array(r.uint32le, 8),
  actions: new r.Array(r.uint32le, 8)
});
