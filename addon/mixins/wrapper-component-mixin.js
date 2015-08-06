import Ember from "ember";
import layout from "../templates/components/wrapper-component";

export default Ember.Mixin.create({
  layout : layout,

  childModuleColumnData : Ember.computed("columnData.childColumnData", {
    get : function() {
      var
      childColumnData = this.get("columnData.childColumnData"),
      moduleColumnData = this.get("moduleColumnData"),
      moduleName = moduleColumnData.get("moduleName");
      return childColumnData.get(moduleName);
    },
  }),
});
