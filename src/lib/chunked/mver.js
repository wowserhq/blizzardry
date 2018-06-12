import r from 'restructure';

import Chunk from './chunk';

export default Chunk({
  version: r.uint32le,
});
