import Ember from "ember";
import { moduleForComponent, test } from "ember-qunit";
import startApp from "../helpers/start-app";
/* jshint ignore:start */
import EmberFlexModules from "ember-flex-modules";
/* jshint ignore:end */

moduleForComponent("ember-flex-module-multi-component", "Collapsible", {
  beforeEach : function(assert) {
    assert.application = startApp();
  },
  afterEach : function(assert) {
    Ember.run(assert.application, "destroy");
  },
  needs : [
    "component:ember-flex-module-collapse-button",
    "component:ember-flex-module-collapse-target",
    "component:ember-flex-module-base-text",
    "component:ember-flex-module-multi-record",
  ],
});

test("Basic Test", function(assert) {
  var
  context = this;
  Ember.run(function() {
    initModule(assert, context, {id : "id", title : "Title", desc : "Desc"}, {
      name : "collapse",
      module : {
        moduleType  : "multiComponent",
      },
      childrenColumnData : [{
        name : "collapseButton",
        module : {
          moduleType : "collapseButton",
          targetKey : "id",
          tagName : "a",
        },
        childColumnData : {
          name : "title",
          module : {
            moduleType : "baseText",
          },
        },
      }, {
        name : "collapseTarget",
        module : {
          moduleType : "collapseTarget",
          targetKey : "id",
        },
        childColumnData : {
          name : "desc",
          module : {
            moduleType : "baseText",
          },
        },
      }],
    });
  });

  andThen(function() {
    assert.equal(assert.module.$("#id").attr("class"), "ember-view collapse");

    click("a");
  });

  andThen(function() {
    assert.equal(assert.module.$("#id").attr("class"), "ember-view collapse in");

    click("a");
  });

  andThen(function() {
    assert.equal(assert.module.$("#id").attr("class"), "ember-view collapse");
  });
});

test("Collapsible Group", function(assert) {
  var
  context = this;
  Ember.run(function() {
    initModule(assert, context, {id : "parent_id", records : Ember.A([
      Ember.Object.create({id : "id1", parent_id : "parent_id", title : "Title1", desc : "Desc1"}),
      Ember.Object.create({id : "id2", parent_id : "parent_id", title : "Title2", desc : "Desc2"}),
      Ember.Object.create({id : "id3", parent_id : "parent_id", title : "Title3", desc : "Desc3"}),
    ])}, {
      name : "collapseDummy",
      module : {
        moduleType : "multiComponent",
      },
      childrenColumnData : [{
        name : "collapseGroup",
        keyName : "records",
        module : {
          moduleType : "multiRecord",
          childRecordKey : "value",
          idKey : "id",
        },
        childColumnData : {
          name : "collapse",
          module : {
            moduleType : "multiComponent",
            additionalClassNames : "panel",
          },
          childrenColumnData : [{
            name : "collapseButton",
            module : {
              moduleType : "collapseButton",
              targetKey : "id",
              parentIdKey : "parent_id",
              tagName : "a",
            },
            childColumnData : {
              name : "title",
              module : {
                moduleType : "baseText",
              },
            },
          }, {
            name : "collapseTarget",
            module : {
              moduleType : "collapseTarget",
              targetKey : "id",
            },
            childColumnData : {
              name : "desc",
              module : {
                moduleType : "baseText",
              },
            },
          }],
        },
      }],
    });
  });

  andThen(function() {
    assert.equal(assert.module.$(".collapse").attr("class"), "ember-view collapse");

    click("#parent_id > div:nth-of-type(1) a");
  });

  andThen(function() {
    assert.equal(assert.module.$("#id1").attr("class"), "ember-view collapse in");

    click("#parent_id > div:nth-of-type(2) a");
  });

  andThen(function() {
    assert.equal(assert.module.$("#id1").attr("class"), "ember-view collapse");
    assert.equal(assert.module.$("#id2").attr("class"), "ember-view collapse in");
  });
});
