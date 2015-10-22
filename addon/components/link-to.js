import Ember from "ember";
import WrapperComponentMixin from "../mixins/wrapper-component-mixin";
import BaseMixin from "../mixins/base-mixin";

export default Ember.LinkComponent.extend(WrapperComponentMixin, BaseMixin, {
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

  defaultTagName : "a",
});
