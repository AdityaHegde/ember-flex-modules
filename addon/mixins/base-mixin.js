import Ember from "ember";

export default Ember.Mixin.create({
  elementIdShouldChange : Ember.observer("moduleColumnData.idKey", "record", function() {
    var
    idKey = this.get("moduleColumnData.idKey"),
    record = this.get("record");
    if(record && idKey) {
      this.set("elementId", record.get(idKey));
    }
  }),

  didInitAttrs : function() {
    var tagName = this.get("moduleColumnData.tagName"), defaultTagName = this.get("defaultTagName");
    this.set("tagName", Ember.isNone(tagName) ? defaultTagName : tagName);
  },

  defaultTagName : "div",
});
