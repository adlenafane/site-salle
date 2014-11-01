'use strict';

angular.module('activity').controller('ActivityController', ['$scope',
  function($scope) {
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
        duration: '45\'',
        level: 'easy',
        category: 'cardio'
      },
      {
        name: 'Biking',
        id: 1,
        duration: '45\'',
        level: 'medium',
        category: 'cardio'
      },
      {
        name: 'Magic Combat',
        id: 2,
        duration: '45\'',
        level: 'hard',
        category: 'cardio'
      },
      {
        name: 'Cardio Attack',
        id: 3,
        duration: '45\'',
        level: 'easy',
        category: 'cardio'
      },
      {
        name: 'Abdos Fessiers',
        id: 4,
        duration: '45\'',
        level: 'medium',
        category: 'cardio'
      },
      {
        name: 'Body Sculpt',
        id: 5,
        duration: '45\'',
        level: 'hard',
        category: 'renforcement'
      },
      {
        name: 'C.A.F.',
        id: 6,
        duration: '45\'',
        level: 'easy',
        category: 'renforcement'
      },
      {
        name: 'Abdos Flash',
        id: 7,
        duration: '45\'',
        level: 'medium',
        category: 'renforcement'
      },
      {
        name: 'Pump',
        id: 8,
        duration: '45\'',
        level: 'hard',
        category: 'renforcement'
      },
      {
        name: 'Zumba',
        id: 9,
        duration: '45\'',
        level: 'easy',
        category: 'danse'
      },
      {
        name: 'Pilates',
        id: 10,
        duration: '45\'',
        level: 'medium',
        category: 'zen'
      },
      {
        name: 'Stretching',
        id: 11,
        duration: '45\'',
        level: 'hard',
        category: 'zen'
      },
      {
        name: 'Gym douce',
        id: 12,
        duration: '45\'',
        level: 'easy',
        category: 'zen'
      }
    ];
  }
]);
