'use strict';

angular.module('contact').controller('ContactController', [
	'$scope',
	function($scope) {
		$scope.map = {
		    center: {
		        latitude: 48.8960695,
		        longitude: 2.7227385
		    },
		    zoom: 15
		};

		$scope.marker = {
			id: 1,
			coords: {
		        latitude: 48.8960695,
		        longitude: 2.7227385
		    }
		};
	}
]);
