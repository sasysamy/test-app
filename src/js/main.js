require.config({
	paths: {
		'domReady': '../libs/requirejs-domready/domReady',
		'angular': '../libs/angular/angular',
		'uiRouter': '../libs/angular-ui-router/release/angular-ui-router',
		'ngAnimate': '../libs/angular-animate/angular-animate',
		'ngMessages': '../libs/angular-messages/angular-messages'
	},

	shim: {
		'angular': {
			exports: 'angular'
		},
		'uiRouter': {
			deps: ['angular']
		},
        'ngAnimate': {
            deps: ['angular']
        },
        'ngMessages': {
            deps: ['ngAnimate']
        }
	},

	deps: [ './angBootstrap']
});

requirejs.onError = function(err) {
	console.error(err);
};
