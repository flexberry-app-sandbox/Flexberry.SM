import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-s-m-customer-l');
  this.route('i-i-s-s-m-customer-e',
  { path: 'i-i-s-s-m-customer-e/:id' });
  this.route('i-i-s-s-m-customer-e.new',
  { path: 'i-i-s-s-m-customer-e/new' });
  this.route('i-i-s-s-m-customer-request-l');
  this.route('i-i-s-s-m-customer-request-e',
  { path: 'i-i-s-s-m-customer-request-e/:id' });
  this.route('i-i-s-s-m-customer-request-e.new',
  { path: 'i-i-s-s-m-customer-request-e/new' });
  this.route('i-i-s-s-m-event-l');
  this.route('i-i-s-s-m-event-e',
  { path: 'i-i-s-s-m-event-e/:id' });
  this.route('i-i-s-s-m-event-e.new',
  { path: 'i-i-s-s-m-event-e/new' });
  this.route('i-i-s-s-m-feedback-l');
  this.route('i-i-s-s-m-feedback-e',
  { path: 'i-i-s-s-m-feedback-e/:id' });
  this.route('i-i-s-s-m-feedback-e.new',
  { path: 'i-i-s-s-m-feedback-e/new' });
  this.route('i-i-s-s-m-service-provider-l');
  this.route('i-i-s-s-m-service-provider-e',
  { path: 'i-i-s-s-m-service-provider-e/:id' });
  this.route('i-i-s-s-m-service-provider-e.new',
  { path: 'i-i-s-s-m-service-provider-e/new' });
  this.route('i-i-s-s-m-ticket-l');
  this.route('i-i-s-s-m-ticket-e',
  { path: 'i-i-s-s-m-ticket-e/:id' });
  this.route('i-i-s-s-m-ticket-e.new',
  { path: 'i-i-s-s-m-ticket-e/new' });
});

export default Router;
