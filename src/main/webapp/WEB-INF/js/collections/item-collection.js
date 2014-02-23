define([
  'underscore',
  'backbone'
], function(_, Backbone) {

	var ItemCollection = Backbone.Collection.extend({
		url: "/items",
		initialize: function() {
			this.sort_key = 'name';
		},		
		comparator: function(a, b) {
		    a = a.get(this.sort_key);
		    b = b.get(this.sort_key);
		    return a > b ? 1 : a < b ? -1 : 0;
		}  
	});
	
	return ItemCollection;

});