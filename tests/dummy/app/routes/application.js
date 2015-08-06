import Ember from "ember";

export default Ember.Route.extend({
  model : function() {
    return Ember.Object.create({
      id : "parent_id",
      records : Ember.A([
        Ember.Object.create({id : "id1", parent_id : "parent_id", title : "Title1", desc : "Desc1"}),
        Ember.Object.create({id : "id2", parent_id : "parent_id", title : "Title2", desc : "Desc2"}),
        Ember.Object.create({id : "id3", parent_id : "parent_id", title : "Title3", desc : "Desc3"}),
      ]),
      title : "Title",
      nodea_id : "a",
      nodeb_id : "b",
      nodec_id : "c",
    });
  },
});
