module.exports = function(grunt) {
	'use strict';

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jsdoc: {
			clean: ['docs/client-jsdocs'],
			dist: {
				src: [
					'src/js/**/*.js',
					'src/js/*.js'
				],
				options: {
					destination: 'docs/client-jsdocs',
					configure: 'node_modules/angular-jsdoc/common/conf.json',
					template: 'node_modules/angular-jsdoc/angular-template/'
				}
			}
		},
		karma: {
			options: {
				basePath: '',
				frameworks: ['jasmine', 'requirejs'],

				files: [
        			{pattern: 'src/libs/angular/angular.js', included: false},
        			{pattern: 'src/libs/angular-mocks/angular-mocks.js', included: false},
					{pattern: 'src/js/**/*.js', included: false},
					{pattern: 'src/spec/**/*.js', included: false},
					'src/spec/test.config.js'
				],

				exclude: [
					'src/js/**/main.js'
				],

				preprocessors: {
					'views/**/*.html': ['ng-html2js']
				}
			},
			dist: {
				singleRun: true,
				browsers: ['PhantomJS'],
				preprocessors: {
					'src/js/**/*.js': ['coverage']
				},

				reports: ['dots','junit', 'coverage'],

				coverageReporter: {
					type: 'cobertura',
					dir: 'log/coverage'
				},

				junitReporter: {
					outputFile: 'log/test-results.xml'
				}
			},
			dev: {
				autoWatch: true,
				browsers: ['PhantomJS', 'Chrome']
			}
		}
	});

	//grunt.loadTasks('tasks');
	
	grunt.loadNpmTasks('grunt-jsdoc');
	grunt.loadNpmTasks('grunt-karma');

	grunt.registerTask('default', ['jsdoc']);
	grunt.registerTask('test', ['karma:dev']);
	//grunt.registerTask('test-basic', 'Test basic jsodc', ['jsdoc:basic']);

};
