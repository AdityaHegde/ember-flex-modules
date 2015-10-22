import Ember from "ember";
import WrapperComponent from "./wrapper-component";
import ShowHideMixin from "../mixins/ShowHideMixin";

export default WrapperComponent.extend(ShowHideMixin, {
  attributeBindings : ["animation:data-animation", "placement:data-placement", "value:title", "value:data-original-title", "delay:data-delay", "type"],

  animation : Ember.computed.alias("moduleColumnData.animation"),
  placement : Ember.computed.alias("moduleColumnData.placement"),
  delay : Ember.computed.alias("moduleColumnData.delay"),

  type : "button",
  defaultTagName : "span",

  showEvent : "show.bs.tooltip",
  shownEvent : "shown.bs.tooltip",
  hideEvent : "hide.bs.tooltip",
  hiddenEvent : "hidden.bs.tooltip",

  didInsertElement : function() {
    this._super();
    this.$().tooltip();
  },

  reshowTooltip : false,

  willUpdate : function() {
    this._super();
    if(this.get("moduleShown")) {
      this.$().tooltip("hide");
      this.set("reshowTooltip", true);
    }
  },

  didUpdate : function() {
    this._super();
    if(this.get("reshowTooltip")) {
      this.$().tooltip("show");
    }
    this.set("reshowTooltip", false);
  },

  destroy : function() {
    this.$().tooltip("destroy");
  },

  valueChangeHook : function(/*value*/) {
    this.rerender();
  },
});
