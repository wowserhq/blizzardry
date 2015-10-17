import r from 'restructure';
import Entity from '../entity';

export default Entity({
  id: r.uint32le,
  nameHash: new r.String(16, 'hex'),
  versionHash: new r.String(16, 'hex'),
  lastModified: r.uint32le,
  flags: r.uint32le
});
