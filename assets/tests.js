'use strict';

define('ember-app/tests/acceptance/flexberry/i-i-s-s-m-customer-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s s m customer l');

  (0, _qunit.test)('testing i-i-s-s-m-customer-l', function (assert) {
    var _this = this;

    visit('/i-i-s-s-m-customer-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-s-m-customer-request-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s s m customer request l');

  (0, _qunit.test)('testing i-i-s-s-m-customer-request-l', function (assert) {
    var _this = this;

    visit('/i-i-s-s-m-customer-request-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-s-m-event-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s s m event l');

  (0, _qunit.test)('testing i-i-s-s-m-event-l', function (assert) {
    var _this = this;

    visit('/i-i-s-s-m-event-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-s-m-feedback-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s s m feedback l');

  (0, _qunit.test)('testing i-i-s-s-m-feedback-l', function (assert) {
    var _this = this;

    visit('/i-i-s-s-m-feedback-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-s-m-service-provider-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s s m service provider l');

  (0, _qunit.test)('testing i-i-s-s-m-service-provider-l', function (assert) {
    var _this = this;

    visit('/i-i-s-s-m-service-provider-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-s-m-ticket-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s s m ticket l');

  (0, _qunit.test)('testing i-i-s-s-m-ticket-l', function (assert) {
    var _this = this;

    visit('/i-i-s-s-m-ticket-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application-offline.js should pass ESLint\n\n');
  });

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-s-m-customer-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-s-m-customer-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-s-m-customer-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-s-m-customer-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-s-m-customer-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-s-m-customer-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-s-m-customer-request-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-s-m-customer-request-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-s-m-customer-request-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-s-m-customer-request-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-s-m-customer-request-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-s-m-customer-request-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-s-m-event-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-s-m-event-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-s-m-event-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-s-m-event-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-s-m-event-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-s-m-event-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-s-m-feedback-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-s-m-feedback-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-s-m-feedback-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-s-m-feedback-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-s-m-feedback-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-s-m-feedback-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-s-m-service-provider-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-s-m-service-provider-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-s-m-service-provider-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-s-m-service-provider-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-s-m-service-provider-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-s-m-service-provider-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-s-m-ticket-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-s-m-ticket-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-s-m-ticket-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-s-m-ticket-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-s-m-ticket-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-s-m-ticket-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/index.js should pass ESLint\n\n');
  });

  QUnit.test('enums/i-i-s-s-m-t-event-type.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'enums/i-i-s-s-m-t-event-type.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-s-m-customer-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-s-m-customer-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-s-m-customer-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-s-m-customer-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-s-m-customer-request-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-s-m-customer-request-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-s-m-customer-request-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-s-m-customer-request-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-s-m-event-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-s-m-event-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-s-m-event-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-s-m-event-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-s-m-feedback-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-s-m-feedback-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-s-m-feedback-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-s-m-feedback-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-s-m-service-provider-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-s-m-service-provider-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-s-m-service-provider-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-s-m-service-provider-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-s-m-ticket-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-s-m-ticket-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-s-m-ticket-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-s-m-ticket-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-s-m-customer-request.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-s-m-customer-request.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-s-m-customer.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-s-m-customer.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-s-m-event.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-s-m-event.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-s-m-feedback.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-s-m-feedback.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-s-m-service-provider.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-s-m-service-provider.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-s-m-ticket-position.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-s-m-ticket-position.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-s-m-ticket.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-s-m-ticket.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/translations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/translations.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-s-m-customer-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-s-m-customer-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-s-m-customer-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-s-m-customer-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-s-m-customer-request-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-s-m-customer-request-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-s-m-customer-request-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-s-m-customer-request-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-s-m-event-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-s-m-event-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-s-m-event-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-s-m-event-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-s-m-feedback-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-s-m-feedback-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-s-m-feedback-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-s-m-feedback-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-s-m-service-provider-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-s-m-service-provider-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-s-m-service-provider-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-s-m-service-provider-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-s-m-ticket-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-s-m-ticket-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-s-m-ticket-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-s-m-ticket-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-s-m-customer-request.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-s-m-customer-request.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-s-m-customer.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-s-m-customer.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-s-m-event.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-s-m-event.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-s-m-feedback.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-s-m-feedback.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-s-m-service-provider.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-s-m-service-provider.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-s-m-ticket-position.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-s-m-ticket-position.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-s-m-ticket.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-s-m-ticket.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/translations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/translations.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-s-m-customer-request.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-s-m-customer-request.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-s-m-customer.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-s-m-customer.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-s-m-event.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-s-m-event.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-s-m-feedback.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-s-m-feedback.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-s-m-service-provider.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-s-m-service-provider.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-s-m-ticket-position.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-s-m-ticket-position.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-s-m-ticket.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-s-m-ticket.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-s-m-customer-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-s-m-customer-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-s-m-customer-request-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-s-m-customer-request-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-s-m-customer-request.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-s-m-customer-request.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-s-m-customer.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-s-m-customer.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-s-m-event-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-s-m-event-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-s-m-event.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-s-m-event.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-s-m-feedback-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-s-m-feedback-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-s-m-feedback.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-s-m-feedback.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-s-m-service-provider-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-s-m-service-provider-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-s-m-service-provider.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-s-m-service-provider.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-s-m-ticket-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-s-m-ticket-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-s-m-ticket-position-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-s-m-ticket-position-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-s-m-ticket-position.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-s-m-ticket-position.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-s-m-ticket.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-s-m-ticket.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-s-m-customer-request.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-s-m-customer-request.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-s-m-customer.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-s-m-customer.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-s-m-event.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-s-m-event.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-s-m-feedback.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-s-m-feedback.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-s-m-service-provider.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-s-m-service-provider.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-s-m-ticket-position.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-s-m-ticket-position.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-s-m-ticket.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-s-m-ticket.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-s-m-customer-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-s-m-customer-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-s-m-customer-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-s-m-customer-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-s-m-customer-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-s-m-customer-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-s-m-customer-request-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-s-m-customer-request-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-s-m-customer-request-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-s-m-customer-request-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-s-m-customer-request-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-s-m-customer-request-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-s-m-event-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-s-m-event-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-s-m-event-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-s-m-event-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-s-m-event-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-s-m-event-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-s-m-feedback-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-s-m-feedback-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-s-m-feedback-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-s-m-feedback-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-s-m-feedback-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-s-m-feedback-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-s-m-service-provider-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-s-m-service-provider-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-s-m-service-provider-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-s-m-service-provider-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-s-m-service-provider-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-s-m-service-provider-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-s-m-ticket-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-s-m-ticket-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-s-m-ticket-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-s-m-ticket-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-s-m-ticket-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-s-m-ticket-l.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-s-m-customer-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-s-m-customer-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-s-m-customer-request-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-s-m-customer-request-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-s-m-customer-request.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-s-m-customer-request.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-s-m-customer.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-s-m-customer.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-s-m-event-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-s-m-event-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-s-m-event.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-s-m-event.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-s-m-feedback-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-s-m-feedback-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-s-m-feedback.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-s-m-feedback.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-s-m-service-provider-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-s-m-service-provider-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-s-m-service-provider.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-s-m-service-provider.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-s-m-ticket-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-s-m-ticket-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-s-m-ticket-position-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-s-m-ticket-position-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-s-m-ticket-position.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-s-m-ticket-position.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-s-m-ticket.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-s-m-ticket.js should pass ESLint\n\n');
  });

  QUnit.test('services/offline-globals.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/offline-globals.js should pass ESLint\n\n');
  });

  QUnit.test('services/store.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/store.js should pass ESLint\n\n');
  });

  QUnit.test('transforms/i-i-s-s-m-t-event-type.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transforms/i-i-s-s-m-t-event-type.js should pass ESLint\n\n');
  });
});
define('ember-app/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('ember-app/tests/helpers/ember-i18n/test-helpers', ['ember-i18n/test-support/-private/t', 'ember-i18n/test-support/-private/assert-translation'], function (_t2, _assertTranslation2) {
  'use strict';

  // example usage: find(`.header:contains(${t('welcome_message')})`)
  Ember.Test.registerHelper('t', function (app, key, interpolations) {
    return (0, _t2.default)(app.__container__, key, interpolations);
  });

  // example usage: expectTranslation('.header', 'welcome_message');
  Ember.Test.registerHelper('expectTranslation', function (app, element, key, interpolations) {
    var text = (0, _t2.default)(app.__container__, key, interpolations);

    (0, _assertTranslation2.default)(element, key, text);
  });
});
define('ember-app/tests/helpers/ember-prop-types', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.createComponent = createComponent;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var VERSION = Ember.VERSION;


  /**
   * Determine if we are on a version of Ember that includes Glimmer 2
   * @returns {Boolean} whether or not we are on Glimmer 2
   */
  function isGlimmer2() {
    var _VERSION$split = VERSION.split('.'),
        _VERSION$split2 = _slicedToArray(_VERSION$split, 2),
        major = _VERSION$split2[0],
        minor = _VERSION$split2[1];

    return parseInt(major) > 1 && parseInt(minor) > 9;
  }

  /**
   * Programitcally instantiate instance of component class
   * @param {Ember.Component} component - component class to instantiate
   * @returns {Ember.Component} instance of component class
   */
  function createComponent(component) {
    if (isGlimmer2()) {
      return component.create({ renderer: {} });
    }

    return component.create();
  }
});
define('ember-app/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember-app/tests/helpers/start-app', 'ember-app/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Ember.RSVP.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };
});
define('ember-app/tests/helpers/start-app', ['exports', 'ember-app/app', 'ember-app/config/environment', 'ember-flexberry/test-support'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes.autoboot = true;
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('ember-app/tests/test-helper', ['ember-app/app', 'ember-app/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('ember-app/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('acceptance/flexberry/i-i-s-s-m-customer-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-s-m-customer-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-s-m-customer-request-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-s-m-customer-request-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-s-m-event-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-s-m-event-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-s-m-feedback-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-s-m-feedback-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-s-m-service-provider-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-s-m-service-provider-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-s-m-ticket-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-s-m-ticket-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-s-m-customer-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-s-m-customer-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-s-m-customer-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-s-m-customer-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-s-m-customer-request-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-s-m-customer-request-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-s-m-customer-request-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-s-m-customer-request-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-s-m-event-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-s-m-event-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-s-m-event-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-s-m-event-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-s-m-feedback-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-s-m-feedback-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-s-m-feedback-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-s-m-feedback-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-s-m-service-provider-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-s-m-service-provider-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-s-m-service-provider-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-s-m-service-provider-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-s-m-ticket-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-s-m-ticket-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-s-m-ticket-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-s-m-ticket-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-s-m-customer-request-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-s-m-customer-request-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-s-m-customer-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-s-m-customer-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-s-m-event-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-s-m-event-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-s-m-feedback-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-s-m-feedback-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-s-m-service-provider-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-s-m-service-provider-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-s-m-ticket-position-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-s-m-ticket-position-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-s-m-ticket-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-s-m-ticket-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-s-m-customer-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-s-m-customer-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-s-m-customer-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-s-m-customer-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-s-m-customer-request-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-s-m-customer-request-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-s-m-customer-request-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-s-m-customer-request-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-s-m-event-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-s-m-event-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-s-m-event-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-s-m-event-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-s-m-feedback-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-s-m-feedback-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-s-m-feedback-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-s-m-feedback-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-s-m-service-provider-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-s-m-service-provider-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-s-m-service-provider-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-s-m-service-provider-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-s-m-ticket-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-s-m-ticket-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-s-m-ticket-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-s-m-ticket-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-s-m-customer-request-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-s-m-customer-request-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-s-m-customer-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-s-m-customer-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-s-m-event-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-s-m-event-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-s-m-feedback-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-s-m-feedback-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-s-m-service-provider-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-s-m-service-provider-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-s-m-ticket-position-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-s-m-ticket-position-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-s-m-ticket-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-s-m-ticket-test.js should pass ESLint\n\n');
  });
});
define('ember-app/tests/unit/controllers/i-i-s-s-m-customer-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-s-m-customer-e', 'Unit | Controller | i-i-s-s-m-customer-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-s-m-customer-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-s-m-customer-l', 'Unit | Controller | i-i-s-s-m-customer-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-s-m-customer-request-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-s-m-customer-request-e', 'Unit | Controller | i-i-s-s-m-customer-request-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-s-m-customer-request-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-s-m-customer-request-l', 'Unit | Controller | i-i-s-s-m-customer-request-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-s-m-event-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-s-m-event-e', 'Unit | Controller | i-i-s-s-m-event-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-s-m-event-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-s-m-event-l', 'Unit | Controller | i-i-s-s-m-event-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-s-m-feedback-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-s-m-feedback-e', 'Unit | Controller | i-i-s-s-m-feedback-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-s-m-feedback-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-s-m-feedback-l', 'Unit | Controller | i-i-s-s-m-feedback-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-s-m-service-provider-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-s-m-service-provider-e', 'Unit | Controller | i-i-s-s-m-service-provider-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-s-m-service-provider-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-s-m-service-provider-l', 'Unit | Controller | i-i-s-s-m-service-provider-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-s-m-ticket-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-s-m-ticket-e', 'Unit | Controller | i-i-s-s-m-ticket-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-s-m-ticket-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-s-m-ticket-l', 'Unit | Controller | i-i-s-s-m-ticket-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/models/i-i-s-s-m-customer-request-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-s-m-customer-request', 'Unit | Model | i-i-s-s-m-customer-request', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-s-m-customer-request', 'model:i-i-s-s-m-customer', 'model:i-i-s-s-m-event', 'model:i-i-s-s-m-feedback', 'model:i-i-s-s-m-service-provider', 'model:i-i-s-s-m-ticket-position', 'model:i-i-s-s-m-ticket', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-s-m-customer-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-s-m-customer', 'Unit | Model | i-i-s-s-m-customer', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-s-m-customer-request', 'model:i-i-s-s-m-customer', 'model:i-i-s-s-m-event', 'model:i-i-s-s-m-feedback', 'model:i-i-s-s-m-service-provider', 'model:i-i-s-s-m-ticket-position', 'model:i-i-s-s-m-ticket', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-s-m-event-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-s-m-event', 'Unit | Model | i-i-s-s-m-event', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-s-m-customer-request', 'model:i-i-s-s-m-customer', 'model:i-i-s-s-m-event', 'model:i-i-s-s-m-feedback', 'model:i-i-s-s-m-service-provider', 'model:i-i-s-s-m-ticket-position', 'model:i-i-s-s-m-ticket', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-s-m-feedback-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-s-m-feedback', 'Unit | Model | i-i-s-s-m-feedback', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-s-m-customer-request', 'model:i-i-s-s-m-customer', 'model:i-i-s-s-m-event', 'model:i-i-s-s-m-feedback', 'model:i-i-s-s-m-service-provider', 'model:i-i-s-s-m-ticket-position', 'model:i-i-s-s-m-ticket', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-s-m-service-provider-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-s-m-service-provider', 'Unit | Model | i-i-s-s-m-service-provider', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-s-m-customer-request', 'model:i-i-s-s-m-customer', 'model:i-i-s-s-m-event', 'model:i-i-s-s-m-feedback', 'model:i-i-s-s-m-service-provider', 'model:i-i-s-s-m-ticket-position', 'model:i-i-s-s-m-ticket', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-s-m-ticket-position-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-s-m-ticket-position', 'Unit | Model | i-i-s-s-m-ticket-position', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-s-m-customer-request', 'model:i-i-s-s-m-customer', 'model:i-i-s-s-m-event', 'model:i-i-s-s-m-feedback', 'model:i-i-s-s-m-service-provider', 'model:i-i-s-s-m-ticket-position', 'model:i-i-s-s-m-ticket', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-s-m-ticket-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-s-m-ticket', 'Unit | Model | i-i-s-s-m-ticket', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-s-m-customer-request', 'model:i-i-s-s-m-customer', 'model:i-i-s-s-m-event', 'model:i-i-s-s-m-feedback', 'model:i-i-s-s-m-service-provider', 'model:i-i-s-s-m-ticket-position', 'model:i-i-s-s-m-ticket', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/routes/i-i-s-s-m-customer-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-s-m-customer-e', 'Unit | Route | i-i-s-s-m-customer-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-s-m-customer-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-s-m-customer-l', 'Unit | Route | i-i-s-s-m-customer-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-s-m-customer-request-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-s-m-customer-request-e', 'Unit | Route | i-i-s-s-m-customer-request-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-s-m-customer-request-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-s-m-customer-request-l', 'Unit | Route | i-i-s-s-m-customer-request-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-s-m-event-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-s-m-event-e', 'Unit | Route | i-i-s-s-m-event-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-s-m-event-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-s-m-event-l', 'Unit | Route | i-i-s-s-m-event-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-s-m-feedback-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-s-m-feedback-e', 'Unit | Route | i-i-s-s-m-feedback-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-s-m-feedback-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-s-m-feedback-l', 'Unit | Route | i-i-s-s-m-feedback-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-s-m-service-provider-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-s-m-service-provider-e', 'Unit | Route | i-i-s-s-m-service-provider-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-s-m-service-provider-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-s-m-service-provider-l', 'Unit | Route | i-i-s-s-m-service-provider-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-s-m-ticket-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-s-m-ticket-e', 'Unit | Route | i-i-s-s-m-ticket-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-s-m-ticket-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-s-m-ticket-l', 'Unit | Route | i-i-s-s-m-ticket-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-s-m-customer-request-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-s-m-customer-request', 'Unit | Serializer | i-i-s-s-m-customer-request', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-s-m-customer-request', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-s-m-t-event-type', 'model:i-i-s-s-m-customer-request', 'model:i-i-s-s-m-customer', 'model:i-i-s-s-m-event', 'model:i-i-s-s-m-feedback', 'model:i-i-s-s-m-service-provider', 'model:i-i-s-s-m-ticket-position', 'model:i-i-s-s-m-ticket', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-s-m-customer-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-s-m-customer', 'Unit | Serializer | i-i-s-s-m-customer', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-s-m-customer', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-s-m-t-event-type', 'model:i-i-s-s-m-customer-request', 'model:i-i-s-s-m-customer', 'model:i-i-s-s-m-event', 'model:i-i-s-s-m-feedback', 'model:i-i-s-s-m-service-provider', 'model:i-i-s-s-m-ticket-position', 'model:i-i-s-s-m-ticket', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-s-m-event-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-s-m-event', 'Unit | Serializer | i-i-s-s-m-event', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-s-m-event', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-s-m-t-event-type', 'model:i-i-s-s-m-customer-request', 'model:i-i-s-s-m-customer', 'model:i-i-s-s-m-event', 'model:i-i-s-s-m-feedback', 'model:i-i-s-s-m-service-provider', 'model:i-i-s-s-m-ticket-position', 'model:i-i-s-s-m-ticket', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-s-m-feedback-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-s-m-feedback', 'Unit | Serializer | i-i-s-s-m-feedback', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-s-m-feedback', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-s-m-t-event-type', 'model:i-i-s-s-m-customer-request', 'model:i-i-s-s-m-customer', 'model:i-i-s-s-m-event', 'model:i-i-s-s-m-feedback', 'model:i-i-s-s-m-service-provider', 'model:i-i-s-s-m-ticket-position', 'model:i-i-s-s-m-ticket', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-s-m-service-provider-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-s-m-service-provider', 'Unit | Serializer | i-i-s-s-m-service-provider', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-s-m-service-provider', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-s-m-t-event-type', 'model:i-i-s-s-m-customer-request', 'model:i-i-s-s-m-customer', 'model:i-i-s-s-m-event', 'model:i-i-s-s-m-feedback', 'model:i-i-s-s-m-service-provider', 'model:i-i-s-s-m-ticket-position', 'model:i-i-s-s-m-ticket', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-s-m-ticket-position-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-s-m-ticket-position', 'Unit | Serializer | i-i-s-s-m-ticket-position', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-s-m-ticket-position', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-s-m-t-event-type', 'model:i-i-s-s-m-customer-request', 'model:i-i-s-s-m-customer', 'model:i-i-s-s-m-event', 'model:i-i-s-s-m-feedback', 'model:i-i-s-s-m-service-provider', 'model:i-i-s-s-m-ticket-position', 'model:i-i-s-s-m-ticket', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-s-m-ticket-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-s-m-ticket', 'Unit | Serializer | i-i-s-s-m-ticket', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-s-m-ticket', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-s-m-t-event-type', 'model:i-i-s-s-m-customer-request', 'model:i-i-s-s-m-customer', 'model:i-i-s-s-m-event', 'model:i-i-s-s-m-feedback', 'model:i-i-s-s-m-service-provider', 'model:i-i-s-s-m-ticket-position', 'model:i-i-s-s-m-ticket', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/config/environment', [], function() {
  var prefix = 'ember-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('ember-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
