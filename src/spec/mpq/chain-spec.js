import path from 'path';

import MPQ from '../../lib/mpq';
import MPQChain from '../../lib/mpq/chain';
import { expect, fixtures } from '../spec-helper';

describe('MPQ.Chain', function () {
  describe('.build', function () {
    it('builds an MPQ chain based on a predefined set of patterns', function () {
      const dataDir = path.join(fixtures, 'mpq-chain');
      const p = (filename) => path.join(dataDir, filename);

      const dummy = new MPQ(null, MPQ.OPEN.READ_ONLY);

      const openSpy = this.sandbox.stub(MPQ, 'open').returns(dummy);
      const patchSpy = this.sandbox.stub(dummy, 'patch');

      const mpq = MPQChain.build(dataDir);
      expect(mpq).to.equal(dummy);

      expect(openSpy).to.have.been.calledWith(p('common.MPQ'));
      expect(patchSpy.args).to.deep.eq([
        [p('common-2.MPQ'), ''],
        [p('expansion.MPQ'), ''],
        [p('lichking.MPQ'), ''],
        [p('enUS/locale-enUS.MPQ'), ''],
        [p('enUS/speech-enUS.MPQ'), ''],
        [p('enUS/expansion-locale-enUS.MPQ'), ''],
        [p('enUS/lichking-locale-enUS.MPQ'), ''],
        [p('enUS/expansion-speech-enUS.MPQ'), ''],
        [p('enUS/lichking-speech-enUS.MPQ'), ''],
        [p('enUS/patch-enUS.MPQ'), ''],
        [p('enUS/patch-enUS-2.MPQ'), ''],
        [p('enUS/patch-enUS-3.MPQ'), ''],
        [p('patch.MPQ'), ''],
        [p('patch-2.MPQ'), ''],
        [p('patch-3.MPQ'), ''],
      ]);
    });
  });
});
