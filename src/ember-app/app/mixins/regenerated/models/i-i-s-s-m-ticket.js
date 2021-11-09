import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  ticketDate: DS.attr('date'),
  customer: DS.belongsTo('i-i-s-s-m-customer', { inverse: null, async: false }),
  ticketPosition: DS.hasMany('i-i-s-s-m-ticket-position', { inverse: 'ticket', async: false })
});

export let ValidationRules = {
  ticketDate: {
    descriptionKey: 'models.i-i-s-s-m-ticket.validations.ticketDate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  customer: {
    descriptionKey: 'models.i-i-s-s-m-ticket.validations.customer.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  ticketPosition: {
    descriptionKey: 'models.i-i-s-s-m-ticket.validations.ticketPosition.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('TicketE', 'i-i-s-s-m-ticket', {
    ticketDate: attr('Ticket date', { index: 0 }),
    customer: belongsTo('i-i-s-s-m-customer', 'Customer', {
      name: attr('Name', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'name' }),
    ticketPosition: hasMany('i-i-s-s-m-ticket-position', 'Ticket position', {
      amount: attr('Amount', { index: 0 }),
      event: belongsTo('i-i-s-s-m-event', 'Event', {
        startTime: attr('Start time', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'startTime' })
    })
  });

  modelClass.defineProjection('TicketL', 'i-i-s-s-m-ticket', {
    ticketDate: attr('Ticket date', { index: 0 }),
    customer: belongsTo('i-i-s-s-m-customer', 'Name', {
      name: attr('Name', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
