define([
  'jquery', 
  'underscore', 
  'backbone', 
  'collections/item-collection', 
  'text!templates/item-list-template.html',
  'models/order-model'], 
function($, _, Backbone, ItemCollection, ItemListTemplate, OrderModel) {

		$.ajaxPrefilter(function(options, originalOptions, jqXHR) {
			options.url = $("#orderBackendURL").val() + options.url; 
		});
		
		var items = new ItemCollection();
		
		var ItemListView = Backbone.View.extend({
			el: $(".page"),
		    render: function(){
		    	var that = this;
		    	items.fetch({
		    		success: function(items) {
		    			var template = _.template(ItemListTemplate, {items: items.models});
		    			that.$el.html(template);
		    		}
		    	});
		    },
		    events: {
		    	"click .btn-primary": "doOrder"
		    },
		    doOrder: function(event) {
		    	var selectedItems = $("input[name='item']:checked");
		    	var selectedItemValues = $(selectedItems).map(function() {return this.value;}).get();
		    	var order = new OrderModel();
		    	order.on("invalid", function(model, error) {alert(error);});
		    	order.set("items", selectedItemValues);
	    		order.save(null, { 
	    			success: function(model) {
	    				alert("Order inserted successfully!");
	    				$(selectedItems).attr("checked", false);
	    			},
	    			error: function(model, reponse) {
	    				alert(reponse.responseText);
	    			}
	    		});
		    }
		});
		
		return ItemListView;
		
});