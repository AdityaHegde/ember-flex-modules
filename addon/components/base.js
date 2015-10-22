import Ember from "ember";
import layout from "../templates/components/base";
import BaseMixin from "../mixins/base-mixin";

/**
 * Base component for modules. Has the hack to update element ID.
 *
 * @module ember-flex-modules
 * @class EmberFlexModules.BaseComponent
 */
export default Ember.Component.extend(BaseMixin, {
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
});
