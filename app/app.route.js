var ClientView = require('./client.view/client.view');
var VendorView = require('./vendor.view/vendor.view');
var RootView   = require('./root.view/root.view');

var appEntryDom = document.getElementById('app');

var rootView, vendorView, clientView;

var App = Backbone.Router.extend({
	routes: {
		'': 'root', 
		'client': 'clientModule',
		'vendor': 'vendorModule',
	}, 
	clientModule: function() {
		console.log('clientView: ', clientView);
		
		if(typeof clientView === 'undefined') {
			clientView = new ClientView({el: appEntryDom});
		}
		clientView.render();
	},
	vendorModule: function() {
		console.log('vendorView: ', vendorView);

		if(typeof vendorView === 'undefined') {
			vendorView = new VendorView({el: appEntryDom});
		}
		vendorView.render();

	},
	root: function() {
		
		console.log('rootView: ', rootView);
		if(typeof rootView === 'undefined') {
			rootView = new RootView({el: appEntryDom});
		}
		rootView.render();

	}
});


module.exports = App;


