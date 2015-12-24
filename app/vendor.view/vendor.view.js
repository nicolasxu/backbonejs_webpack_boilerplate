
var VendorView = Backbone.View.extend({
	events: {},
	initialize: function() {},
	template: _.template('<h1>This is vendor view</h1>'),
	render: function() {
		this.$el.html(this.template({}));
	}
});

module.exports = VendorView;