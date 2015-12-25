
var tpl = require('./root.view.tpl');

var RootView = Backbone.View.extend({
	events: {},
	initialize: function() {},
	template: _.template(tpl),
	render: function() {
		this.$el.html(this.template({}));
	}
});

module.exports = RootView;