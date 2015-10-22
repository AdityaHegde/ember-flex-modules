import Ember from "ember";
import { moduleForComponent, test } from "ember-qunit";
import startApp from "../helpers/start-app";
/* jshint ignore:start */
import EmberFlexModules from "ember-flex-modules";
/* jshint ignore:end */

moduleForComponent("ember-flex-module-mapped-value", "Mapped Value", {
  beforeEach : function(assert) {
    assert.application = startApp();
  },
  afterEach : function(assert) {
    Ember.run(assert.application, "destroy");
  },

  unit : true,
});

test("Basic Test", function(assert) {
  var
  context = this;
  Ember.run(function() {
    initModule(assert, context, {vara : "v0"}, {
      name : "vara",
      module : {
        moduleType  : "mappedValue",
        opts : Ember.A([
          Ember.Object.create({o_val : "v0", o_mapped : "l0"}),
          Ember.Object.create({o_val : "v1", o_mapped : "l1"}),
          Ember.Object.create({o_val : "v2", o_mapped : "l2"}),
        ]),
        optionsPath : "opts",
        valuePath : "o_val",
        mappedValuePath : "o_mapped"
      },
    });
  });

  andThen(function() {
    assert.equal(assert.module.$().text().trim(), "l0");

    assert.record.set("vara", "v2");
  });

  andThen(function() {
    assert.equal(assert.module.$().text().trim(), "l2");

    assert.record.set("vara", "v5");
  });

  andThen(function() {
    assert.equal(assert.module.$().text().trim(), "");
  });
});
