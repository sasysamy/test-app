define(['angular', 'angularMocks', 'test/index', 'test/test-service'], function(angular, angularMocks, test, testService) {

	describe('Test Service', function() {

		var testData = {
				"introMsg": "A test to check concepts of fetching data from service calls"
			};
		var testApi = {};
		var $httpBackend;

		beforeEach(module('testApp.test'));

		beforeEach(inject(function(_testService_, _$httpBackend_) {
			testApi = _testService_;
			$httpBackend = _$httpBackend_;
		}));

		it('should return test Data', function() {

			var response;
			
			var expectedUrl = function(url) {
				return url.indexOf('datas/') !== -1;
			};

			//var expectedUrl = /http:\/\/www.omdbapi.com\/\?v=1&s=star%20wars/;

			$httpBackend.when('GET', expectedUrl)
			.respond(200, testData);

			testApi.getData('datas/testData.json')
				.then(function(data) {
					response = data;
				});

			$httpBackend.flush();

			expect(response).toEqual(testData);
		});
	})
})