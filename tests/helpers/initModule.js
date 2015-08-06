import Ember from "ember";
import EmberColumnData from "ember-column-data";

export default Ember.Test.registerAsyncHelper("initModule", function(app, assert, context, record, columnData, module) {
  assert.record = Ember.Object.create(record);
  assert.columnData = EmberColumnData.ColumnData.create(columnData);
  module = module || "module";
  assert.module = context.subject({
    record           : assert.record,
    columnData       : assert.columnData,
    moduleColumnData : assert.columnData.get(module),
  });
  assert.module.appendTo("#ember-testing");
});
