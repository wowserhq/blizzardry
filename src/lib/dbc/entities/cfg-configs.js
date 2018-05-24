import r from 'restructure';

import Entity from '../entity';

export default Entity({
  id: r.uint32le,
  realmType: r.uint32le,
  pvp: r.uint32le,
  roleplay: r.uint32le,
});
