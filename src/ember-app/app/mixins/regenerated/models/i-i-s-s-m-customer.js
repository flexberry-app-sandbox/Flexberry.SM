import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  surname: DS.attr('string'),
  phone: DS.attr('string'),
  email: DS.attr('string')
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-s-m-customer.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  surname: {
    descriptionKey: 'models.i-i-s-s-m-customer.validations.surname.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  phone: {
    descriptionKey: 'models.i-i-s-s-m-customer.validations.phone.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  email: {
    descriptionKey: 'models.i-i-s-s-m-customer.validations.email.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('CustomerE', 'i-i-s-s-m-customer', {
    name: attr('Name', { index: 0 }),
    surname: attr('Surname', { index: 1 }),
    phone: attr('Phone', { index: 2 }),
    email: attr('Email', { index: 3 })
  });

  modelClass.defineProjection('CustomerL', 'i-i-s-s-m-customer', {
    name: attr('Name', { index: 0 }),
    surname: attr('Surname', { index: 1 }),
    phone: attr('Phone', { index: 2 }),
    email: attr('Email', { index: 3 })
  });
};
