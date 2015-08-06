//import Ember from "ember";
import BaseText from "./base-text";
import layout from "../templates/components/multi-record";
import WrapperComponentMixin from "../mixins/wrapper-component-mixin";

export default BaseText.extend(WrapperComponentMixin, {
  layout : layout,
});
