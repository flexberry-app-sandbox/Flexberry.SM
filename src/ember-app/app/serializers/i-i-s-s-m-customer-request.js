import { Serializer as CustomerRequestSerializer } from
  '../mixins/regenerated/serializers/i-i-s-s-m-customer-request';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(CustomerRequestSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
