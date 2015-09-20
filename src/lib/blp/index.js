const crypto = require('crypto');
const fs = require('fs');
const temp = require('temp');
const BLPLib = require('./blp-lib');
const CLib = require('../c-lib');
const Mipmap = require('./mipmap');

module.exports = class BLP {

  static TMP_PREFIX = `blp-${crypto.randomBytes(6).toString('hex')}-`

  constructor(path, handle, file) {
    this.path = path;
    this.handle = handle;
    this.file = file;

    this.mipmaps = [];
    for (let i = 0; i < this.mipmapCount; ++i) {
      this.mipmaps.push(new Mipmap(this, i));
    }
  }

  close() {
    const handle = this.handle;
    if (handle) {
      this.handle = null;
      BLPLib.blp_release(handle);
    }

    const file = this.file;
    if (file) {
      this.file = null;
      CLib.fclose(file);

      if (this.path.match(this.constructor.TMP_PREFIX)) {
        fs.unlinkSync(this.path);
      }
    }
  }

  get opened() {
    return !!this.file;
  }

  get version() {
    return BLPLib.blp_version(this.handle);
  }

  get mipmapCount() {
    return BLPLib.blp_nbMipLevels(this.handle);
  }

  get smallest() {
    return this.mipmaps[this.mipmapCount - 1];
  }

  get largest() {
    return this.mipmaps[0];
  }

  static open(path, callback) {
    const file = CLib.fopen(path, 'r');
    if (!file.isNull()) {
      const handle = BLPLib.blp_processFile(file);
      if (!handle.isNull()) {
        const blp = new this(path, handle, file);

        if (callback) {
          callback(blp);
          blp.close();
          return true;
        }

        return blp;
      }
      CLib.fclose(file);
      throw new Error('image could not be opened');
    }
    throw new Error('image could not be found');
  }

  static from(buffer, callback) {
    const tmp = temp.path({ prefix: this.TMP_PREFIX });
    fs.writeFileSync(tmp, buffer);
    try {
      return this.open(tmp, callback);
    } catch(e) {
      fs.unlinkSync(tmp);
      throw e;
    }
  }

};
