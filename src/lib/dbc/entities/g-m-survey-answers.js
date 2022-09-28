import r from 'restructure';

import Entity from '../entity';
import LocalizedStringRef from '../localized-string-ref';

export default Entity({
  ID: r.int32le,
  Sort_Index: r.int32le,
  GMSurveyQuestionID: r.int32le,
  Answer_Lang: LocalizedStringRef,
});
