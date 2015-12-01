define(['./app'], function(app) {
	'use strict';
	return app.config(config);
});

function config($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('home');

	$stateProvider

	.state('home', {
		url: '/home',
		templateUrl: 'views/home.html'
	})
	.state('test1', {
		url: '/test1',
		controller: 'testCtrl',
		templateUrl: 'views/test1.html'
	});
};