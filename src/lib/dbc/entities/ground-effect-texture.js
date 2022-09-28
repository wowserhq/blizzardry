import r from 'restructure';

import Entity from '../entity';

export default Entity({
  ID: r.int32le,
  DoodadId: new r.Array(r.int32le, 4),
  DoodadWeight: new r.Array(r.int32le, 4),
  Density: r.int32le,
  Sound: r.int32le,
});
