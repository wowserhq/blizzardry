import r from 'restructure';

import Chunk from './chunk';

export default Chunk({
  filenames: new r.Array(new r.String(null), 'size', 'bytes')
});
