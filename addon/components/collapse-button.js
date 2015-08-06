import Ember from "ember";
import BaseText from "./base-text";
import WrapperComponentMixin from "../mixins/wrapper-component-mixin";

export default BaseText.extend(WrapperComponentMixin, {
  attributeBindings : ["dataToggle:data-toggle", "dataParent:data-parent", "href", "dataTarget:data-target", "expanded:aria-expanded", "target:aria-controls"],

  dataToggle : "collapse",

  dataParent : Ember.computed("moduleColumnData.parentIdKey", "record", {
    get : function() {
      var
      parentIdKey = this.get("moduleColumnData.parentIdKey"),
      record = this.get("record");
      return record && parentIdKey && "#" + record.get(parentIdKey);
    },
  }),

  target : Ember.computed("moduleColumnData.targetKey", "record", {
    get : function() {
      var
      targetKey = this.get("moduleColumnData.targetKey"),
      record = this.get("record");
      return record && record.get(targetKey);
    },
  }),
  
  href : Ember.computed("target", "tagName", {
    get : function() {
      var target = this.get("target"), tagName = this.get("tagName");
      if(tagName.cache) {
        tagName = tagName.cache;
      }
      if(tagName === "a") {
        return "#" + target;
      }
      return null;
    },
  }),

  dataTarget : Ember.computed("target", "tagName", {
    get : function() {
      var target = this.get("target"), tagName = this.get("tagName");
      if(tagName.cache) {
        tagName = tagName.cache;
      }
      if(tagName !== "a") {
        return "#" + target;
      }
      return null;
    },
  }),

  expanded : Ember.computed.alias("value"),
});
