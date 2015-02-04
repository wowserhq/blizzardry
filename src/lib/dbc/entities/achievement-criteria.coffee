r = require('restructure')
Entity = require('../entity')
LocalizedStringRef = require('../localized-string-ref')

module.exports = Entity(
  id: r.uint32le
  achievementID: r.uint32le
  type: r.uint32le
  assetID: r.uint32le
  quantity: r.uint32le

  startEvent: r.uint32le
  startAsset: r.uint32le
  failEvent: r.uint32le
  failAsset: r.uint32le

  description: LocalizedStringRef

  flags: r.uint32le
  timerStartEvent: r.uint32le
  timerAssetID: r.uint32le
  timerTime: r.uint32le
  order: r.uint32le
)
