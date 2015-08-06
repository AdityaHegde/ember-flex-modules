import Ember from "ember";

export default Ember.Mixin.create({
  showHidePromise : null,
  showHideResolve : null,
  showHideReject : null,

  createShowHidePromise : function() {
    var that = this,
    promise = new Ember.RSVP.Promise(function(resolve, reject) {
      that.setProperties({
        showHideResolve : resolve,
        showHideReject : reject,
      });
    });
    this.set("showHidePromise", promise);
    if(Ember.testing) {
      Ember.Test.lastPromise = promise;
    }
    return promise;
  },

  showEvent : "",
  shownEvent : "",
  hideEvent : "",
  hiddenEvent : "",
  eleSelector : null,
 
  didInsertElement : function() {
    var
    that = this, element = this.$(),
    showEvent = this.get("showEvent"), shownEvent = this.get("shownEvent"),
    hideEvent = this.get("hideEvent"), hiddenEvent = this.get("hiddenEvent"),
    eleSelector = this.get("eleSelector");

    if(eleSelector) {
      element = this.$(eleSelector);
    }

    if(!Ember.isEmpty(showEvent) && !Ember.isEmpty(shownEvent)) {
      element.on(showEvent, function(/*e*/) {
        Ember.run(function() {
          if(!that.get("showHideResolve")) {
            that.createShowHidePromise();
          }
        });
      });

      element.on(shownEvent, function(/*e*/) {
        Ember.run(function() {
          that.set("moduleShown", true);
          that.moduleWasShown();
          if(that.get("showHideResolve")) {
            var resolve = that.get("showHideResolve");
            that.set("showHideResolve", null);
            resolve();
          }
        });
      });
    }

    if(!Ember.isEmpty(hideEvent) && !Ember.isEmpty(hiddenEvent)) {
      element.on(hideEvent, function(/*e*/) {
        Ember.run(function() {
          if(!that.get("showHideResolve")) {
            that.createShowHidePromise();
          }
          that.set("fromButton", false);
        });
      });

      element.on(hiddenEvent, function(/*e*/) {
        Ember.run(function() {
          that.set("moduleShown", false);
          that.moduleWasHidden();
          if(that.get("showHideResolve")) {
            var resolve = that.get("showHideResolve");
            that.set("showHideResolve", null);
            resolve();
          }
        });
      });
    }
  },

  moduleShown : false,
  moduleWasShown : function() {},
  moduleWasHidden : function() {},
});
