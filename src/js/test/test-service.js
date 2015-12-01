/**
 * @ngdoc factory
 * @memberOf testApp.test
 * @name testService
 * @description
 *  utility service to do get sample data by doing service calls.
 *  @param {provider} $http To take care of HTTP Service calls.
 */
define(['./module'], function(test) {

	'use strict';

	test.factory('testService', ['$http', '$q', testService]);

	function testService ($http, $q){
		var testService = {};
		
		function httpPromise(url) {
			var deferred = $q.defer();

			$http.get(url)
			.success(function(data) {
				deferred.resolve(data);
			})
			.error(function() {
				deferred.reject();
			});

			return deferred.promise;
		}

		testService.getData = function(url) {
			return httpPromise(url);
		};

		return testService;
	}
});
