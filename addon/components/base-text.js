import Ember from "ember";
import Base from "./base";
import layout from "../templates/components/base-text";
import EmberColumnData from "ember-column-data";

/**
 * Base component for modules with value synced with an attribute on record.
 * Has the logic to alias record for any child componets to 'value'.
 *
 * @module ember-flex-modules
 * @class EmberFlexModules.BaseTextComponent
 * @extends EmberFlexModules.BaseComponent
 */
export default Base.extend(EmberColumnData.ColumnDataValueMixin, {
  layout : layout,

  childRecord : Ember.computed("record", "value", "moduleColumnData.childRecordKey", {
    get : function() {
      var childRecordKey = this.get("moduleColumnData.childRecordKey");
      return this.get(childRecordKey);
    },
  }),
});
