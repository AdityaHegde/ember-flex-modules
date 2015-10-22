import Ember from "ember";
import BaseText from "./base-text";
import layout from "../templates/components/mapped-value";

export default BaseText.extend({
  layout : layout,

  mappedValue : Ember.computed("value", {
    get : function() {
      var
      moduleColumnData = this.get("moduleColumnData"),
      options = moduleColumnData.get(moduleColumnData.get("optionsPath")),
      value = this.get("value"),
      option = options.findBy(moduleColumnData.get("valuePath"), value);
      return option && option.get(moduleColumnData.get("mappedValuePath"));
    },
  }),
});
