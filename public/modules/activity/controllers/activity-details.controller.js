'use strict';

angular.module('activity')
.controller('ActivityDetailsController', ['$scope', '$stateParams',
  function($scope, $stateParams) {
    console.log('controller details');
    $scope.category = $stateParams.category;
    console.log($stateParams);
  }
]);
