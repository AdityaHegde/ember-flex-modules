import Ember from "ember";
import layout from "../templates/components/base";

/**
 * Base component for modules. Has the hack to update element ID.
 *
 * @module ember-flex-modules
 * @class EmberFlexModules.BaseComponent
 */
export default Ember.Component.extend({
  init : function() {
    this._super();
    this.elementIdShouldChange();
  },

  classNameBindings : ["moduleColumnData.additionalClassNames"],

  layout : layout,

  /**
   * Column data block for module. Will have params for module.
   *
   * @property moduleColumnData
   */
  moduleColumnData : null,

  /**
   * Column data object.
   *
   * @property columnData
   */
  columnData : null,

  /**
   * Record to get any data from.
   *
   * @property record
   */
  record : null,

  elementIdShouldChange : Ember.observer("moduleColumnData.idKey", "record", function() {
    var
    idKey = this.get("moduleColumnData.idKey"),
    record = this.get("record");
    if(record && idKey) {
      this.set("elementId", record.get(idKey));
    }
  }),
});
