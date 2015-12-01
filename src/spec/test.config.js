var tests = Object.keys(window.__karma__.files).filter(function(file) {
	return (/\.spec\.js$/).test(file);
});

require.config({
	paths: {
		'angular': '/base/src/libs/angular/angular',
		'angularMocks': '/base/src/libs/angular-mocks/angular-mocks'
	},

	baseUrl: '/base/src/js',

	shim: {
		'angular': {
			exports: 'angular'
		},
		'angularMocks': {
			exports: 'angular.mock',
			deps: ['angular']
		}
	},

	deps: tests,

	callback: window.__karma__.start
});