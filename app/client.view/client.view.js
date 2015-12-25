
var tpl = require('./client.view.tpl');
var ClientView = Backbone.View.extend({
	events: {},
	initialize: function() {},
	template: _.template(tpl),
	render: function () {
		this.$el.html(this.template({}));
	}
});

module.exports = ClientView;