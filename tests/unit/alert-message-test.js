import Ember from "ember";
import { moduleForComponent, test } from "ember-qunit";
import startApp from "../helpers/start-app";
/* jshint ignore:start */
import EmberFlexModules from "ember-flex-modules";
/* jshint ignore:end */

moduleForComponent("ember-flex-module-alert-message", "Alert Message", {
  beforeEach : function(assert) {
    assert.application = startApp();
  },
  afterEach : function(assert) {
    Ember.run(assert.application, "destroy");
  },
  unit: true,
});

test("Basic Test", function(assert) {
  var
  context = this;
  Ember.run(function() {
    initModule(assert, context, {message : "Alert"}, {
      name : "message",
      module : {
        moduleType  : "alertMessage",
        alertClass  : "alert-warning",
        glyphiconClass : "glyphicon-info-sign",
        switchOnValueChange : true,
        dismissible : true,
      },
    });
  });

  andThen(function() {
    assert.equal(assert.module.$(".alert-message").text(), "Alert");
    assert.equal(assert.module.$().attr("class"), "ember-view alert alert-warning alert-dismissible hidden");
    assert.equal(assert.module.$("span.btn-sm").attr("class"), "glyphicon glyphicon-info-sign btn-sm");

    assert.record.set("message", "Change");
  });

  andThen(function() {
    assert.equal(assert.module.$(".alert-message").text(), "Change");
    assert.equal(assert.module.$().attr("class"), "ember-view alert alert-warning alert-dismissible");

    click("button.close");
  });

  wait();

  andThen(function() {
    assert.equal(assert.module.$().attr("class"), "ember-view alert alert-warning alert-dismissible hidden");
  });
});

/*test("Auto close", function(assert) {
  var
  context = this;
  Ember.run(function() {
    initModule(assert, context, {message : "Alert"}, {
      name : "message",
      module : {
        moduleType  : "alertMessage",
        alertClass  : "alert-warning",
        glyphiconClass : "glyphicon-info-sign",
        switchOnValueChange : true,
        dismissible : true,
        autoCloseIn : 50,
        animateTo : {
          opcaity : 0,
        },
        animateDuration : 50,
      },
    });
  });

  andThen(function() {
    assert.record.set("message", "Change");
  });

  andThen(function() {
    assert.equal(assert.module.$().attr("class"), "ember-view alert alert-warning alert-dismissible hidden");
  });
});*/
