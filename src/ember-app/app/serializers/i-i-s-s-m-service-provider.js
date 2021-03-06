import { Serializer as ServiceProviderSerializer } from
  '../mixins/regenerated/serializers/i-i-s-s-m-service-provider';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ServiceProviderSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
