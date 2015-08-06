import Ember from "ember";
import WrapperComponentMixin from "../mixins/wrapper-component-mixin";

export default Ember.LinkComponent.extend(WrapperComponentMixin, {
  willRender : function() {
    var
    //columnData = this.get("columnData"),
    moduleColumnData = this.get("moduleColumnData"),
    linkToParams = moduleColumnData.get("linkToParams"),
    record = this.get("record"),
    params = Ember.A([
      "dummy",
      moduleColumnData.get("targetRouteName"),
    ]);

    linkToParams.forEach(function(linkToParam) {
      params.pushObject(record.get(linkToParam));
    });

    this.attrs.params = params;

    this._super();

    this.notifyPropertyChange("href");
  },

  classNameBindings : ["moduleColumnData.additionalClassNames"],

  moduleColumnData : null,
  columnData : null,

  record : null,

  childRecord : Ember.computed("record", "value", "moduleColumnData.childRecordKey", {
    get : function() {
      var childRecordKey = this.get("moduleColumnData.childRecordKey");
      return this.get(childRecordKey);
    },
  }),

  href: Ember.computed("models", "targetRouteName", "_routing.currentState", function() {
    var tagName = this.get("tagName"); 
    if((Ember.typeOf(tagName) === "string" && tagName !== "a") || tagName.cache !== "a") {
      return;
    }

    var targetRouteName = this.get("targetRouteName");
    var models = this.get("models");

    if (this.get("loading")) {
      return this.get("loadingHref");
    }

    targetRouteName = this._handleOnlyQueryParamsSupplied(targetRouteName);

    var routing = this.get("_routing");
    return routing.generateURL(targetRouteName, models, this.get("queryParams.values"));
  }),

  tagName : "a",
});
