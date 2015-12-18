import r from 'restructure';

import Entity from '../entity';

export default Entity({
  id: r.uint32le,
  index: r.uint32le,
  spellVisualID: r.uint32le
});
