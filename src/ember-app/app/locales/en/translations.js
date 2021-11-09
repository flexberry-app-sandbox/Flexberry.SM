import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISSMCustomerLForm from './forms/i-i-s-s-m-customer-l';
import IISSMCustomerRequestLForm from './forms/i-i-s-s-m-customer-request-l';
import IISSMEventLForm from './forms/i-i-s-s-m-event-l';
import IISSMFeedbackLForm from './forms/i-i-s-s-m-feedback-l';
import IISSMServiceProviderLForm from './forms/i-i-s-s-m-service-provider-l';
import IISSMTicketLForm from './forms/i-i-s-s-m-ticket-l';
import IISSMCustomerEForm from './forms/i-i-s-s-m-customer-e';
import IISSMCustomerRequestEForm from './forms/i-i-s-s-m-customer-request-e';
import IISSMEventEForm from './forms/i-i-s-s-m-event-e';
import IISSMFeedbackEForm from './forms/i-i-s-s-m-feedback-e';
import IISSMServiceProviderEForm from './forms/i-i-s-s-m-service-provider-e';
import IISSMTicketEForm from './forms/i-i-s-s-m-ticket-e';
import IISSMCustomerRequestModel from './models/i-i-s-s-m-customer-request';
import IISSMCustomerModel from './models/i-i-s-s-m-customer';
import IISSMEventModel from './models/i-i-s-s-m-event';
import IISSMFeedbackModel from './models/i-i-s-s-m-feedback';
import IISSMServiceProviderModel from './models/i-i-s-s-m-service-provider';
import IISSMTicketPositionModel from './models/i-i-s-s-m-ticket-position';
import IISSMTicketModel from './models/i-i-s-s-m-ticket';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-s-m-customer-request': IISSMCustomerRequestModel,
    'i-i-s-s-m-customer': IISSMCustomerModel,
    'i-i-s-s-m-event': IISSMEventModel,
    'i-i-s-s-m-feedback': IISSMFeedbackModel,
    'i-i-s-s-m-service-provider': IISSMServiceProviderModel,
    'i-i-s-s-m-ticket-position': IISSMTicketPositionModel,
    'i-i-s-s-m-ticket': IISSMTicketModel
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'events-and-requests': {
          caption: 'events-and-requests',
          title: 'events-and-requests',
          'i-i-s-s-m-customer-request-l': {
            caption: 'i-i-s-s-m-customer-request-l',
            title: 'i-i-s-s-m-customer-request-l'
          },
          'i-i-s-s-m-ticket-l': {
            caption: 'i-i-s-s-m-ticket-l',
            title: 'i-i-s-s-m-ticket-l'
          },
          'i-i-s-s-m-event-l': {
            caption: 'i-i-s-s-m-event-l',
            title: 'i-i-s-s-m-event-l'
          },
          'i-i-s-s-m-feedback-l': {
            caption: 'i-i-s-s-m-feedback-l',
            title: 'i-i-s-s-m-feedback-l'
          }
        },
        profile: {
          caption: 'profile',
          title: 'profile',
          'i-i-s-s-m-customer-l': {
            caption: 'i-i-s-s-m-customer-l',
            title: 'i-i-s-s-m-customer-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-s-m-customer-l': IISSMCustomerLForm,
    'i-i-s-s-m-customer-request-l': IISSMCustomerRequestLForm,
    'i-i-s-s-m-event-l': IISSMEventLForm,
    'i-i-s-s-m-feedback-l': IISSMFeedbackLForm,
    'i-i-s-s-m-service-provider-l': IISSMServiceProviderLForm,
    'i-i-s-s-m-ticket-l': IISSMTicketLForm,
    'i-i-s-s-m-customer-e': IISSMCustomerEForm,
    'i-i-s-s-m-customer-request-e': IISSMCustomerRequestEForm,
    'i-i-s-s-m-event-e': IISSMEventEForm,
    'i-i-s-s-m-feedback-e': IISSMFeedbackEForm,
    'i-i-s-s-m-service-provider-e': IISSMServiceProviderEForm,
    'i-i-s-s-m-ticket-e': IISSMTicketEForm
  },

});

export default translations;
