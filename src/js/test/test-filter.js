define(['./module'], function(test) {
	
	'use strict';
	test.filter('testFilter', testFilter);

	function testFilter() {
		return function(input) {
			return input ? 'test' : 'test1';
		};
	}
});