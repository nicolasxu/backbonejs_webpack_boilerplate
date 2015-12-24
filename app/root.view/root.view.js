
var RootView = Backbone.View.extend({
	events: {},
	initialize: function() {},
	template: _.template('<h1>this is root view </h1>'),
	render: function() {
		this.$el.html(this.template({}));
	}
});

module.exports = RootView;