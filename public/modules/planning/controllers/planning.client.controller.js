'use strict';

angular.module('planning').controller('PlanningController', ['$scope',
	function($scope) {
		$scope.planning = [
      {
        day: 'Lundi',
        classes: [
          {
            name: 'Zumba',
            start: '9h30',
            duration: 60
          },
          {
            name: 'Body step',
            start: '10h30',
            duration: 45
          }
        ]
      }
    ]
	}
]);