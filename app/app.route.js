var ClientView = require('./client.view/client.view');
var VendorView = require('./vendor.view/vendor.view');
var RootView   = require('./root.view/root.view');

var appEntryDom = document.getElementById('app');

var rootView, vendorView, clientView;

var App = Backbone.Router.extend({
	routeMountDom: appEntryDom,
	routes: {
		'': 'root', 
		'client': 'clientModule',
		'vendor': 'vendorModule',
	}, 
	clientModule: function() {
	
		this.renderRoute('clientView', ClientView);
	},
	vendorModule: function() {
	
		this.renderRoute('vendorView', VendorView);

	},
	root: function() {

		this.renderRoute('rootView', RootView);

	}, 
	renderRoute: function (viewName,ViewObject) {
		// console.log('view instance', this[viewName]);
		if(typeof this[viewName] === 'undefined') {
			this[viewName] = new ViewObject({el:this.routeMountDom});
		}
		this[viewName].render();
	}
});


module.exports = App;


