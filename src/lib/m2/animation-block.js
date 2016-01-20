import r from 'restructure';

import Nofs from './nofs';

export default function(type) {
  return new r.Struct({
    interpolationType: r.uint16le,
    globalSequenceID: r.int16le,
    timestamps: new Nofs(new Nofs(r.uint32le)),
    values: new Nofs(new Nofs(type)),

    trackCount: function() {
      return this.values.length;
    },

    tracks: function() {
      const tracks = [];

      for (let trackIndex = 0; trackIndex < this.trackCount; trackIndex++) {
        const track = {};

        // Corresponds to offset in animations array of MD2.
        track.animationIndex = trackIndex;

        track.keyframes = [];

        this.timestamps[trackIndex].forEach((timestamp, keyframeIdx) => {
          const valueAtTimestamp = this.values[trackIndex][keyframeIdx];

          const keyframe = {
            time: timestamp,
            value: valueAtTimestamp
          };

          track.keyframes.push(keyframe);
        });

        tracks.push(track);
      }

      return tracks;
    },

    maxTrackLength: function() {
      let max = 0;

      this.tracks.forEach((track) => {
        if (track.keyframes.length > max) {
          max = track.keyframes.length;
        }
      });

      return max;
    },

    keyframeCount: function() {
      let keyframeCount = 0;

      for (let i = 0, len = this.tracks.length; i < len; ++i) {
        keyframeCount += this.tracks[i].keyframes.length;
      }

      return keyframeCount;
    },

    firstKeyframe: function() {
      if (this.tracks.length === 0) {
        return null;
      } else {
        for (let i = 0, len = this.tracks.length; i < len; ++i) {
          const track = this.tracks[i];

          if (track.keyframes.length > 0) {
            return track.keyframes[0];
          }
        }

        return null;
      }
    },

    empty: function() {
      return this.maxTrackLength === 0;
    },

    animated: function() {
      return !this.empty;
    }
  });
}
