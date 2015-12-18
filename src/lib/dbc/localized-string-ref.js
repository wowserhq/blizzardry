import r from 'restructure';

import StringRef from './string-ref';

class LocalizedStringRef {

  constructor() {
    this.strings = new r.Array(StringRef, 17);
  }

  decode(stream, parent) {
    // TODO: Add support for multiple locales
    return this.strings.decode(stream, parent)[0];
  }

}

export default new LocalizedStringRef();
