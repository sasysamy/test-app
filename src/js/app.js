define([
	'angular',
	'uiRouter',
	'ngMessages',
	'ngAnimate',
	'./test/index'
], function(ng) {
	'use strict';
	return ng.module('testApp', ['ngMessages', 'ui.router', 'ngAnimate', 'testApp.test']);
});
