import r from 'restructure';

import Entity from '../entity';

export default Entity({
  id: r.uint32le,
  flags: r.uint32le
});
