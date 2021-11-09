import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import tEventTypeEnum from '../enums/i-i-s-s-m-t-event-type';

export default FlexberryEnum.extend({
  enum: tEventTypeEnum,
  sourceType: 'IIS.SM.tEventType'
});
