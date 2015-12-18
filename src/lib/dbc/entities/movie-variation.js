import r from 'restructure';

import Entity from '../entity';

export default Entity({
  id: r.uint32le,
  movieID: r.uint32le,
  fileDataID: r.uint32le
});
