import Ember from "ember";
import ModuleTypesMap from "../module-types-map";
import EmberObjectUtils from "ember-object-utils";
import EmberColumnData from "ember-column-data";

var ModuleColumnDataMixin = Ember.Mixin.create({
  moduleType : "",

  componentName  : Ember.computed("moduleType", {
    get : function() {
      return ModuleTypesMap[this.get("moduleType")] || ModuleTypesMap.base;
    },
  }),

  moduleName : "",

  modules : null,

  tagName : "div",

  childRecordKey : "record",
}),
ModuleColumnData = Ember.Object.extend(ModuleColumnDataMixin, {
  moduleName : "module",
});

EmberColumnData.ColumnData.reopen({
  module : EmberObjectUtils.belongsTo(ModuleColumnData),
});

export default ModuleColumnDataMixin;
