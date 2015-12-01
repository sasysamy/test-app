/**
 * @ngdoc controller
 * @memberOf testApp.test
 * @name testCtrl
 * @desc
 * 		It will take care of applying logic related things for angularJs app.
 * @param {object} $scope The scope associated with this controller.
 */
define(['./module'], function(test) {
	'use strict';

	test.controller('testCtrl', ['$scope', 'testService', testCtrl]);

	function testCtrl($scope, testService) {

		//var promise = 
		testService.getData('datas/testData.json')
		.then(function(data) {
			$scope.introMsg = data.introMsg;
		});
		//testService.
	}

});