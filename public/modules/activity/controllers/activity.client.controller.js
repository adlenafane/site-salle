'use strict';

angular.module('activity').controller('ActivityController', ['$scope', '$famous', '$timeline',
  function($scope, $famous, $timeline) {
    var Transitionable = $famous['famous/transitions/Transitionable'];
    var Easing = $famous['famous/transitions/Easing'];
    var defaultsLayoutOptions = {
      dimensions: [2, 2],
      transition: {
        curve: 'easeInOut',
        duration: 500
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
          dimensions: [1, $scope.activities[category].length]
        };

      } else {
        $scope.currentCategory = null;
        $scope.categoriesLayoutOptions = defaultsLayoutOptions;
      }
    };

    $scope.activities = {
      cardio: [
        {
          name: 'Step',
          id: 0,
          t: new Transitionable(0)
        },
        {
          name: 'Biking',
          id: 1,
          t: new Transitionable(0)
        },
        {
          name: 'Magic Combat',
          id: 2,
          t: new Transitionable(0)
        },
        {
          name: 'Cardio Attack',
          id: 3,
          t: new Transitionable(0)
        }
      ],
      renforcement: [
        {
          name: 'Abdos Fessiers',
          id: 4,
          t: new Transitionable(0)
        },
        {
          name: 'Body Sculpt',
          id: 5,
          t: new Transitionable(0)
        },
        {
          name: 'C.A.F.',
          id: 6,
          t: new Transitionable(0)
        },
        {
          name: 'Abdos Flash',
          id: 7,
          t: new Transitionable(0)
        },
        {
          name: 'Pump',
          id: 8,
          t: new Transitionable(0)
        }
      ],
      danse: [
        {
          name: 'Zumba',
          id: 9,
          t: new Transitionable(0)
        }
      ],
      zen: [
        {
          name: 'Pilates',
          id: 10,
          t: new Transitionable(0)
        },
        {
          name: 'Stretching',
          id: 11,
          t: new Transitionable(0)
        },
        {
          name: 'Gym douce',
          id: 12,
          t: new Transitionable(0)
        }
      ]
    };

    $scope.t = new Transitionable(0);

    $scope.opacity = $timeline([
      [0.4, 0, Easing.inOutQuart],
      [0.8, 1, Easing.inOutQuart]
    ]);

    $scope.enterAnimation = function(t, $done) {
      t.set(1, {
        duration: 1500
      }, $done);
    };

    $scope.leaveAnimation = function(t, $done) {
      t.set(0, {
        duration: 1500
      }, $done);
    };
  }
]);
