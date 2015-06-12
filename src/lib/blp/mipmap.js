const attr = require('attr-accessor')
const BLPLib = require('./blp-lib')

module.exports = class Mipmap {

  constructor(blp, level) {
    this.blp = blp
    this.level = level
  }

  get width() {
    return BLPLib.blp_width(this.blp.handle, this.level)
  }

  get height() {
    return BLPLib.blp_height(this.blp.handle, this.level)
  }

  get data() {
    const data = BLPLib.blp_convert(this.blp.file, this.blp.handle, this.level)
    const size = this.width * this.height * 4
    return data.reinterpret(size, 0)
  }

  get bgra() {
    return this.data
  }

  get rgba() {
    const pixels = this.data
    const length = pixels.length;

    for(var i = 0; i < length; i += 4) {
      let blue = pixels[i]
      let red = pixels[i + 2]
      pixels[i] = red
      pixels[i + 2] = blue
    }

    return pixels
  }

}
