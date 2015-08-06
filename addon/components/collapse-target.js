import Ember from "ember";
import BaseText from "./base-text";
import ShowHideMixin from "../mixins/ShowHideMixin";
import WrapperComponentMixin from "../mixins/wrapper-component-mixin";

export default BaseText.extend(ShowHideMixin, WrapperComponentMixin, {
  init : function() {
    this._super();
    this.elementIdShouldChange();
  },

  classNameBindings : [":collapse", "expanded:in"],

  elementIdShouldChange : Ember.observer("moduleColumnData.targetKey", "record", function() {
    var
    targetKey = this.get("moduleColumnData.targetKey"),
    record = this.get("record");
    if(record && targetKey) {
      this.set("elementId", record.get(targetKey));
    }
  }),

  showEvent : "show.bs.collapse",
  shownEvent : "shown.bs.collapse",
  hideEvent : "hide.bs.collapse",
  hiddenEvent : "hidden.bs.collapse",

  moduleShown : Ember.computed.alias("value"),
});
