/**
 * @module ember-flex-modules
 */

import Ember from "ember";
import ModuleTypesMap from "./module-types-map";
import ModuleColumnDataMixin from "./mixins/ModuleColumnDataMixin";
import ShowHideMixin from "./mixins/ShowHideMixin";
import components from "./components/index";

var
flexModules = [components],
EmberFlexModules = Ember.Namespace.create();
EmberFlexModules.ModuleTypesMap = ModuleTypesMap;
EmberFlexModules.ModuleColumnDataMixin = ModuleColumnDataMixin;
EmberFlexModules.ShowHideMixin = ShowHideMixin;

for(var i = 0; i < flexModules.length; i++) {
  for(var k in flexModules[i]) {
    if(flexModules[i].hasOwnProperty(k)) {
      EmberFlexModules[k] = flexModules[i][k];
    }
  }
}

window.EmberFlexModules = EmberFlexModules;

export default EmberFlexModules;
