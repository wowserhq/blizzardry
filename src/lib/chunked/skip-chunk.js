import r from 'restructure';
import Chunk from './chunk';

export default Chunk({
  skip: new r.Reserved(r.uint8, 'size')
});
