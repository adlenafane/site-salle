'use strict';

angular.module('activity').controller('ActivityController', ['$scope',
  function($scope) {
    $scope.zoomOn = function(category) {

      if ($scope.currentCategory !== category) {
        $scope.currentCategory = category;

      } else {
        $scope.currentCategory = null;
      }
    };

    $scope.activities = {
      cardio: [
        {
          name: 'Step',
          id: 0
        },
        {
          name: 'Biking',
          id: 1
        },
        {
          name: 'Magic Combat',
          id: 2
        },
        {
          name: 'Cardio Attack',
          id: 3
        }
      ],
      renforcement: [
        {
          name: 'Abdos Fessiers',
          id: 4
        },
        {
          name: 'Body Sculpt',
          id: 5
        },
        {
          name: 'C.A.F.',
          id: 6
        },
        {
          name: 'Abdos Flash',
          id: 7
        },
        {
          name: 'Pump',
          id: 8
        }
      ],
      danse: [
        {
          name: 'Zumba',
          id: 9
        }
      ],
      zen: [
        {
          name: 'Pilates',
          id: 10
        },
        {
          name: 'Stretching',
          id: 11
        },
        {
          name: 'Gym douce',
          id: 12
        }
      ]
    };
  }
]);
