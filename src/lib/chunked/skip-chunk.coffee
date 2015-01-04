r = require('restructure')
{uint8} = require('../types')
Chunk = require('./chunk')

module.exports = Chunk(
  skip: new r.Reserved(uint8, 'size')
)
