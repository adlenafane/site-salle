'use strict';

angular.module('planning').controller('PlanningController', [
  '$scope', '$state','$http',
	function ($scope, $state, $http) {
    $scope.search = {};
    $scope.coaches = [];
    $scope.categories = [];

    if ($state.params.name) {
      $scope.search.name = $state.params.name;
    }

		$http.get('/api/planning').then(function (response) {
      $scope.planning = response.data;

      for (var i = 1; i < $scope.planning.length; i++) {
        for (var classIndex = 0; classIndex < $scope.planning[i].classes.length; classIndex++) {
          var coach = $scope.planning[i].classes[classIndex].coach;
          var category = $scope.planning[i].classes[classIndex].category;
          if ($scope.coaches.indexOf(coach) === -1) {
            $scope.coaches.push(coach);
          }
          if ($scope.categories.indexOf(category) === -1) {
            $scope.categories.push(category);
          }
        }
      }
      $scope.coaches.sort();
    });

    $scope.$watch('search', function() {
      for (var key in $scope.search) {
        if (!$scope.search[key]) {
          delete $scope.search[key];
        }
      }
    }, true);
	}
]);
