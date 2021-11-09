import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  feedbackText: DS.attr('string'),
  ranking: DS.attr('number'),
  customer: DS.belongsTo('i-i-s-s-m-customer', { inverse: null, async: false }),
  event: DS.belongsTo('i-i-s-s-m-event', { inverse: null, async: false })
});

export let ValidationRules = {
  feedbackText: {
    descriptionKey: 'models.i-i-s-s-m-feedback.validations.feedbackText.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  ranking: {
    descriptionKey: 'models.i-i-s-s-m-feedback.validations.ranking.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  customer: {
    descriptionKey: 'models.i-i-s-s-m-feedback.validations.customer.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  event: {
    descriptionKey: 'models.i-i-s-s-m-feedback.validations.event.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('FeedbackE', 'i-i-s-s-m-feedback', {
    ranking: attr('Ranking', { index: 0 }),
    feedbackText: attr('Feedback text', { index: 1 }),
    customer: belongsTo('i-i-s-s-m-customer', 'Customer', {
      name: attr('Name', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'name' }),
    event: belongsTo('i-i-s-s-m-event', 'Event', {
      startTime: attr('Start time', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'startTime' })
  });

  modelClass.defineProjection('FeedbackL', 'i-i-s-s-m-feedback', {
    ranking: attr('Ranking', { index: 0 }),
    feedbackText: attr('Feedback text', { index: 1 }),
    customer: belongsTo('i-i-s-s-m-customer', 'Name', {
      name: attr('Name', { index: 2 })
    }, { index: -1, hidden: true }),
    event: belongsTo('i-i-s-s-m-event', 'Start time', {
      startTime: attr('Start time', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
