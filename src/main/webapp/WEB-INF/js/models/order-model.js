define([
  'underscore',
  'backbone',
], function(_, Backbone) {

	var OrderModel = Backbone.Model.extend({
	    urlRoot: '/order',
	    validate: function(attrs, options) {
	    	if (attrs.items.length == 0) {
	    		return "Select any item before doing order!";
	    	}
	    }
	});
	
	return OrderModel;

});