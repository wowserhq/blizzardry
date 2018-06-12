import path from 'path';

import glob from 'globby';

import MPQ from './';

const PATTERNS = [
  'common.MPQ',
  'common-2.MPQ',
  'expansion.MPQ',
  'lichking.MPQ',
  '*/locale-*.MPQ',
  '*/speech-*.MPQ',
  '*/expansion-locale-*.MPQ',
  '*/lichking-locale-*.MPQ',
  '*/expansion-speech-*.MPQ',
  '*/lichking-speech-*.MPQ',
  '*/patch-????.MPQ',
  '*/patch-*.MPQ',
  'patch.MPQ',
  'patch-*.MPQ',
];

class MPQChain {
  static build(dataDir) {
    const patterns = PATTERNS.map(mpq => (
      path.join(dataDir, mpq)
    ));

    const archives = glob.sync(patterns);

    const mpq = MPQ.open(archives.shift(), MPQ.OPEN.READ_ONLY);
    archives.forEach(archive => {
      mpq.patch(archive, '');
    });
    return mpq;
  }
}

export default MPQChain;
