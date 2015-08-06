import Ember from "ember";
import { moduleForComponent, test } from "ember-qunit";
import startApp from "../helpers/start-app";
/* jshint ignore:start */
import EmberFlexModules from "ember-flex-modules";
/* jshint ignore:end */

moduleForComponent("ember-flex-module-tool-tip", "Tooltip", {
  beforeEach : function(assert) {
    assert.application = startApp();
  },
  afterEach : function(assert) {
    Ember.run(assert.application, "destroy");
  },
  needs : [
    "component:ember-flex-module-base-text",
  ],
});

test("Basic Test", function(assert) {
  var
  context = this;
  Ember.run(function() {
    initModule(assert, context, {title : "Title", tooltip : "Tooltip"}, {
      name : "tooltip",
      module : {
        moduleType : "toolTip",
        placement : "bottom",
      },
      childColumnData : {
        name : "title",
        module : {
          moduleType : "baseText",
        },
      },
    });
  });

  andThen(function() {
    Ember.run(assert.module.$(), "mouseenter");
  });

  andThen(function() {
    assert.equal($(".tooltip").attr("class"), "tooltip fade bottom in");
    assert.equal($(".tooltip").text(), "Tooltip");

    Ember.run(function() {
      assert.record.set("tooltip", "Tooltip_changed");
    });
  });

  andThen(function() {
    //TODO : check why component.rerender doesnt work in valueChangeHook defined in tool-tip.js
    //assert.equal($(".tooltip").text(), "Tooltip_changed");

    Ember.run(assert.module.$(), "mouseleave");
  });

  andThen(function() {
    assert.equal($("tooltip").length, 0);
    Ember.run(assert.module.$(), "mouseenter");
  });

  andThen(function() {
    assert.equal($(".tooltip").text(), "Tooltip_changed");
  });
});
