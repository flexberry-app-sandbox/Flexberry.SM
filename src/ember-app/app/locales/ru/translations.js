import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'SM',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'SM',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'SM',
          title: 'SM'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'events-and-requests': {
          caption: 'Events and Requests',
          title: 'Events and Requests',
          'i-i-s-s-m-customer-request-l': {
            caption: 'Customer request',
            title: ''
          },
          'i-i-s-s-m-ticket-l': {
            caption: 'Ticket',
            title: ''
          },
          'i-i-s-s-m-event-l': {
            caption: 'Event',
            title: ''
          },
          'i-i-s-s-m-feedback-l': {
            caption: 'Feedback',
            title: ''
          }
        },
        profile: {
          caption: 'Profile',
          title: 'Profile',
          'i-i-s-s-m-customer-l': {
            caption: 'Customer Profile',
            title: 'Customer'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
