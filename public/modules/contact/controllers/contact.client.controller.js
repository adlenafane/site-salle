'use strict';

angular.module('contact').controller('ContactController', [
	'$scope',
	function($scope) {
		$scope.map = {
		    center: {
          latitude: 48.7897294,
          longitude: 2.2859919
		    },
		    zoom: 16
		};

		$scope.salle = {
      id: 1,
			coords: {
          latitude: 48.7905062,
          longitude: 2.2846781
		    }
		};

    $scope.transports = [
      {
        id: 2,
        coords: {
          latitude: 48.787280,
          longitude: 2.293427
        },
        icon: 'modules/contact/img/RER_B_small.png'
      },
      {
        id: 3,
        coords: {
          latitude: 48.790680,
          longitude: 2.284141
        },
        icon: 'modules/contact/img/194genRVB_small.png'
      },
      {
        id: 4,
        coords: {
          latitude: 48.791125,
          longitude: 2.284769
        },
        icon: 'modules/contact/img/394genRVB_small.png'
      }
    ]
	}
]);
