'use strict';

//Setting up route
angular.module('coaching').config(['$stateProvider',
	function($stateProvider) {
		// Coaching state routing
		$stateProvider.
		state('coaching', {
			url: '/coaching',
			templateUrl: 'modules/coaching/views/coaching.client.view.html'
		});
	}
]);