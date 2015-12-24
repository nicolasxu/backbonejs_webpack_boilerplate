'use strict';
// entry point of the app

var $ = require('jquery');
require('lodash');
require('backbone');
require('./scss/style.scss');

require('file?name=[name].html!./index.html_direct');

var App = require('./app.route.js');

$(document).ready(function(){
	var myApp = new App();
	Backbone.history.start({pushState: false});
	

});