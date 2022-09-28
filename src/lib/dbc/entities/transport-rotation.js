import r from 'restructure';

import Entity from '../entity';

export default Entity({
  ID: r.int32le,
  GameObjectsID: r.int32le,
  TimeIndex: r.int32le,
  RotX: r.floatle,
  RotY: r.floatle,
  RotZ: r.floatle,
  RotW: r.floatle,
});
