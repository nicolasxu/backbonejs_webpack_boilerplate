
var tpl = require('./vendor.view.tpl');
var VendorView = Backbone.View.extend({
	events: {},
	initialize: function() {},
	template: _.template(tpl),
	render: function() {
		this.$el.html(this.template({}));
	}
});

module.exports = VendorView;