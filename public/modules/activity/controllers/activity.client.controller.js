'use strict';

angular.module('activity').controller('ActivityController', ['$scope',
  function($scope) {
    $scope.currentCategory = null;

    $scope.zoomOn = function(category) {
      if ($scope.currentCategory !== category) {
        $scope.currentCategory = category;

      } else {
        $scope.currentCategory = null;
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
