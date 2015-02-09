'use strict';

//Setting up route
angular.module('osteopathy').config(['$stateProvider',
	function($stateProvider) {
		// Osteopathy state routing
		$stateProvider.
		state('osteopathy', {
			url: '/osteopathie',
			templateUrl: 'modules/osteopathy/views/osteopathy.client.view.html'
		});
	}
]);
