'use strict';

angular.module('activity').controller('ActivityController', ['$scope', '$famous', '$timeline',
  function($scope, $famous, $timeline) {
    var DURATION = 500;
    var defaultsLayoutOptions = {
      dimensions: [2, 2],
      transition: {
        curve: 'easeInOut',
        duration: DURATION
      }
    };
    $scope.categoriesLayoutOptions = defaultsLayoutOptions;

    $scope.zoomOn = function(category) {

      if ($scope.currentCategory !== category) {
        $scope.currentCategory = category;
        $scope.categoriesLayoutOptions = {
          dimensions: [4, 1]
        };

        $scope.activitiesLayoutOptions = {
          dimensions: [$scope.activities.length, 1]
        };

      } else {
        $scope.currentCategory = null;
        $scope.categoriesLayoutOptions = defaultsLayoutOptions;
      }
    };

    $scope.activities = [
      {
        name: 'Step',
        id: 0,
        category: 'cardio'
      },
      {
        name: 'Biking',
        id: 1,
        category: 'cardio'
      },
      {
        name: 'Magic Combat',
        id: 2,
        category: 'cardio'
      },
      {
        name: 'Cardio Attack',
        id: 3,
        category: 'cardio'
      },
      {
        name: 'Abdos Fessiers',
        id: 4,
        category: 'cardio'
      },
      {
        name: 'Body Sculpt',
        id: 5,
        category: 'renforcement'
      },
      {
        name: 'C.A.F.',
        id: 6,
        category: 'renforcement'
      },
      {
        name: 'Abdos Flash',
        id: 7,
        category: 'renforcement'
      },
      {
        name: 'Pump',
        id: 8,
        category: 'renforcement'
      },
      {
        name: 'Zumba',
        id: 9,
        category: 'danse'
      },
      {
        name: 'Pilates',
        id: 10,
        category: 'zen'
      },
      {
        name: 'Stretching',
        id: 11,
        category: 'zen'
      },
      {
        name: 'Gym douce',
        id: 12,
        category: 'zen'
      }
    ];
  }
]);
