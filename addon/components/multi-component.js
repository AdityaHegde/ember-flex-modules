import BaseText from "./base-text";
import layout from "../templates/components/multi-component";
import Ember from "ember";

export default BaseText.extend({
  layout : layout,

  modulesColumnData : Ember.computed("moduleColumnData.modules.@each", "columnData.childrenColumnData.@each", {
    get : function() {
      var
      columnData = this.get("columnData"),
      moduleColumnData = this.get("moduleColumnData"),
      modules = moduleColumnData.get("modules"),
      modulesMap = {}, moduleName = moduleColumnData.get("moduleName"),
      modulesColumnData;
      if(modules) {
        modules.forEach(function(module) {
          modulesMap[module] = 1;
        });
        modulesColumnData = Ember.A(columnData.get("childrenColumnData").filter(function(columnData) {
          return !!modulesMap[columnData.get(moduleName + ".moduleType")];
        }));
      }
      else {
        modulesColumnData = Ember.A(columnData.get("childrenColumnData").filter(function(columnData) {
          return !!columnData.get(moduleName + ".moduleType");
        }));
      }
      return Ember.A(modulesColumnData.mapBy(moduleName));
    },
  }),
});
