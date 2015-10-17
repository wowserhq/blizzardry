import r from 'restructure';

export default new r.Pointer(
  r.uint32le,
  new r.String(null, 'utf8'),
  {
    type: 'global',
    relativeTo: 'parent.stringBlockOffset'
  }
);
