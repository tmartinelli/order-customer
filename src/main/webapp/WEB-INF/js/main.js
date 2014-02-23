require.config({
  paths: {
    jquery: 'libs/jquery',
    underscore: 'libs/underscore',
    backbone: 'libs/backbone',
    templates: '../templates'
  }
});

require([
  'jquery', 
  'views/item-list-view'], 
function($, ItemListView) {
	$(function() {
		var itemListView = new ItemListView();
		itemListView.render();
	});
});