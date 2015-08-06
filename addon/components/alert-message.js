import Ember from "ember";
import BaseText from "./base-text";
import layout from "../templates/components/alert-message";
import EmberTimerUtils from "ember-timer-utils";

/**
 * Alert message component to show an optionally dismissible message.
 *
 * @module ember-flex-modules
 * @class EmberFlexModules.AlertMessageComponent
 * @extends EmberFlexModules.BaseTextComponent
 */
export default BaseText.extend({
  layout : layout,

  classNameBindings : [":alert", "moduleColumnData.alertClass", "moduleColumnData.dismissible:alert-dismissible", "showAlert::hidden"],

  showAlert : false,

  closeAlert : function() {
    var
    moduleColumnData = this.get("moduleColumnData"), that = this,
    resolveFun;
    /*promise = */new Ember.RSVP.Promise(function(resolve/*, reject*/) {
      resolveFun = resolve;
    });
    /*if(Ember.testing) {
      Ember.Test.lastPromise = promise;
    }*/
    this.$().animate(moduleColumnData.get("animateTo"), {
      duration : moduleColumnData.get("animateDuration"),
      complete : function() {
        that.set("showAlert", false);
        resolveFun();
      },
    });
  },

  valueChangeHook : function(val) {
    this._super();

    var moduleColumnData = this.get("moduleColumnData");

    if(!Ember.isEmpty(val) && moduleColumnData.get("switchOnValueChange")) {
      this.set("showAlert", true);

      var autoCloseIn = moduleColumnData.get("autoCloseIn"), that = this;

      if(!Ember.isEmpty(autoCloseIn) && autoCloseIn > 0) {
        EmberTimerUtils.addToQue(this.get("elementId"), autoCloseIn).then(function() {
          that.closeAlert();
        });
      }
    }
  },

  actions : {
    close : function() {
      this.closeAlert();
    },
  },
});
