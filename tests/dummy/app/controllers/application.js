import Ember from "ember";
import EmberColumnData from "ember-column-data";
/* jshint ignore:start */
import EmberFlexModules from "ember-flex-modules";
/* jshint ignore:end */

export default Ember.Controller.extend({
  columnData : EmberColumnData.ColumnData.create({
    name : "collapseDummy",
    module : {
      moduleType : "multiComponent",
    },
    childrenColumnData : [{
      name : "linkto",
      module : {
        moduleType : "linkTo",
        targetRouteName : "nodec",
        linkToParams : ["nodea_id", "nodeb_id", "nodec_id"],
        tagName : "a",
      },
      childColumnData : {
        name : "title",
        module : {
          moduleType : "baseText",
        },
      },
    }],
  }),
});
