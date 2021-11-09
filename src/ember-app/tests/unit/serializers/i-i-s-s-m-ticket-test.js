import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-s-m-ticket', 'Unit | Serializer | i-i-s-s-m-ticket', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-s-m-ticket',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-s-m-t-event-type',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
