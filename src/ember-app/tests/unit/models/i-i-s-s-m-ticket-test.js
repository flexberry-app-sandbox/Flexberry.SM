import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-s-m-ticket', 'Unit | Model | i-i-s-s-m-ticket', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-s-m-customer-request',
    'model:i-i-s-s-m-customer',
    'model:i-i-s-s-m-event',
    'model:i-i-s-s-m-feedback',
    'model:i-i-s-s-m-service-provider',
    'model:i-i-s-s-m-ticket-position',
    'model:i-i-s-s-m-ticket',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
