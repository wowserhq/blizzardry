import r from 'restructure';

import Entity from '../entity';

export default Entity({
  id: r.uint32le,
  effectPackageID: r.uint32le,
  effectGroupID: r.uint32le,
  stateType: r.uint32le,
});
