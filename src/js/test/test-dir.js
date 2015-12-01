/**
 * @ngdoc directive
 * @memberOf testApp.test
 * @name testDir
 * @scope
 * @description
 * 	 An example directive to show it in our app.
 *   Restrict To:  Element and Attribute
 *
 * @example
 * <test-dir></test-dir>
 */
define(['./module'], function(test) {
	
	'use strict';
	test.directive('testDir', testDir);

	function testDir() {
		return {
			restrict: 'EA',
			templateUrl: 'views/testTemp.html',
			link: function(scope, elem, attr) {

			}
		}
	}
});