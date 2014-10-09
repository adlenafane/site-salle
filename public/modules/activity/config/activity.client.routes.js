'use strict';

//Setting up route
angular.module('activity').config(['$stateProvider',
	function($stateProvider) {
		// Activity state routing
		$stateProvider.
		state('activity', {
			url: '/activites',
			templateUrl: 'modules/activity/views/activity.client.view.html'
		});
	}
]);