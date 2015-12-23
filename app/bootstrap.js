'use strict';
// entry point of the app

var $ = require('jquery');
require('lodash');
require('backbone');
require('./scss/style.scss');

require('file?name=[name].html!./index.html_direct');

$(document).ready(function(){
	alert('document ready');


});