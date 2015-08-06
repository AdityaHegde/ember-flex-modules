/**
 * @module ember-flex-modules
 */

import Ember from "ember";
import ModuleTypesMap from "./module-types-map";
import ModuleColumnDataMixin from "./mixins/ModuleColumnDataMixin";
import ShowHideMixin from "./mixins/ShowHideMixin";

var
EmberFlexModules = Ember.Namespace.create();
EmberFlexModules.ModuleTypesMap = ModuleTypesMap;
EmberFlexModules.ModuleColumnDataMixin = ModuleColumnDataMixin;
EmberFlexModules.ShowHideMixin = ShowHideMixin;

window.EmberFlexModules = EmberFlexModules;

export default EmberFlexModules;
