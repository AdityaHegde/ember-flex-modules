import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("nodea", {path : "nodea/:node_a_id"}, function() {
    this.resource("nodeb", {path : "nodeb/:node_b_id"}, function() {
      this.resource("nodec", {path : "nodec/:node_c_id"});
    });
  });
});

export default Router;
