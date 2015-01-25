'use strict';

//Setting up route
angular.module('planning').config(['$stateProvider',
	function($stateProvider) {
		// Planning state routing
		$stateProvider.
		state('planning', {
			url: '/planning?name',
			templateUrl: 'modules/planning/views/planning.client.view.html'
		});
	}
]);
