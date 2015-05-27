const r = require('restructure')
const StringRef = require('./string-ref')

class LocalizedStringRef {

  constructor() {
    this.strings = new r.Array(StringRef, 17)
  }

  decode(stream, parent) {
    // TODO: Add support for multiple locales
    return this.strings.decode(stream, parent)[0]
  }

}

module.exports = new LocalizedStringRef()
