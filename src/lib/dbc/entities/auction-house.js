const r = require('restructure')
const Entity = require('../entity')
const LocalizedStringRef = require('../localized-string-ref')

module.exports = Entity({
  id: r.uint32le,
  factionID: r.uint32le,
  auctionFee: r.uint32le,
  despositTax: r.uint32le,
  name: LocalizedStringRef
})
