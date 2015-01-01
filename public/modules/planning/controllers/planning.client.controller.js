'use strict';

angular.module('planning').controller('PlanningController', ['$scope',
	function($scope) {
		$scope.planning = [
      {
        name: '',
        slots: [
          {
            label: 'Matin',
            separator: true,
            category: 'Matin',
            maxCount: 2
          },
          {
            label: 'Midi',
            separator: true,
            category: 'Midi',
            maxCount: 2
          },
          {
            label: 'Après-midi',
            separator: true,
            category: 'Après-midi',
            maxCount: 1
          },
          {
            label: 'Soir',
            separator: true,
            category: 'Soir',
            maxCount: 1
          }
        ]
      },
      {
        name: 'Lundi',
        classes: [
          {
            name: 'Zumba',
            start: '9h30',
            timeGroup: 'Matin',
            duration: 60,
            category: 'danse',
            coach: 'Nolwen',
            time: '9h30- 10h30'
          },
          {
            name: 'Body step',
            start: '10h30',
            timeGroup: 'Matin',
            duration: 45,
            category: 'cardio',
            coach: 'Nolwen',
            time: '10h30-11h15'
          },
          {
            name: 'Body Pump',
            start: '12h15',
            timeGroup: 'Midi',
            duration: 45,
            category: 'renforcement',
            coach: 'Julie',
            time: '12h15-13h00'
          },
          {
            name: 'Body Step',
            start: '13h00',
            timeGroup: 'Midi',
            duration: 30,
            category: 'cardio',
            coach: 'Nolwen',
            time: '13h00-13h30'
          }
        ]
      },
      {
        name: 'Mardi',
        classes: [
          {
            name: 'Body Balance',
            start: '9h00',
            timeGroup: 'Matin',
            duration: 30,
            category: 'cardio',
            coach: 'Chrystel',
            time: '9h00-9h30'
          },
          {
            name: 'Body Pump',
            start: '9h45',
            timeGroup: 'Matin',
            duration: 45,
            category: 'renforcement',
            coach: 'Chrystel',
            time: '9h45-10h30'
          },
          {
            name: 'Body Attack',
            start: '12h15',
            timeGroup: 'Midi',
            duration: 30,
            category: 'cardio',
            coach: 'Nolwen',
            time: '12h15-12h45'
          },
          {
            name: 'Core',
            start: '12h45',
            timeGroup: 'Midi',
            duration: 30,
            category: 'renforcement',
            coach: 'Nolwen',
            time: '12h45-13h15'
          }
        ]
      },
      {
        name: 'Mercredi',
        classes: [
          {
            name: 'Pilates',
            start: '9h00',
            timeGroup: 'Matin',
            duration: 45,
            category: 'zen',
            coach: 'Nolwen',
            time: '9h00-9h45'
          },
          {
            name: 'Body Pump',
            start: '12h15',
            timeGroup: 'Matin',
            duration: 30,
            category: 'renforcement',
            coach: 'Julie',
            time: '12h15-12h45'
          },
          {
            name: 'Body Vive',
            start: '12h45',
            timeGroup: 'Midi',
            duration: 45,
            category: 'cardio',
            coach: 'Julie',
            time: '12h45-13h30'
          }
        ]
      },
      {
        name: 'Jeudi',
        classes: [
          {
            name: 'Body Vive',
            start: '9h30',
            timeGroup: 'Matin',
            duration: 30,
            category: 'cardio',
            coach: 'Chrystel',
            time: '9h30-10h00'
          },
          {
            name: 'Stretching',
            start: '10h00',
            timeGroup: 'Matin',
            duration: 30,
            category: 'zen',
            coach: 'Chrystel',
            time: '10h00-10h30'
          },
          {
            name: 'Body Combat',
            start: '12h15',
            timeGroup: 'Midi',
            duration: 30,
            category: 'renforcement',
            coach: 'Nolwen',
            time: '12h15-12h45'
          },
          {
            name: 'Body Pump',
            start: '13h00',
            timeGroup: 'Midi',
            duration: 30,
            category: 'renforcement',
            coach: 'Nolwen',
            time: '13h00-13h00'
          }
        ]
      },
      {
        name: 'Vendredi',
        classes: [
          {
            name: 'Body Pump',
            start: '9h00',
            timeGroup: 'Matin',
            duration: 45,
            category: 'renforcement',
            coach: 'Chrystel',
            time: '9h00-9h45'
          },
          {
            name: 'Body Blance',
            start: '10h00',
            timeGroup: 'Matin',
            duration: 30,
            category: 'zen',
            coach: 'Chrystel',
            time: '10h00-10h30'
          },
          {
            name: 'Body Step',
            start: '12h15',
            timeGroup: 'Midi',
            duration: 30,
            category: 'cardio',
            coach: 'Nolwen',
            time: '12h15-12h45'
          },
          {
            name: 'Core',
            start: '12h45',
            timeGroup: 'Midi',
            duration: 30,
            category: 'renforcement',
            coach: 'Chrystel',
            time: '12h45-13h15'
          }
        ]
      },
      {
        name: 'Samedi',
        classes: [
          {
            name: 'Body Attack',
            start: '10h30',
            timeGroup: 'Matin',
            duration: 45,
            category: 'cardio',
            coach: 'Julie',
            time: '10h30-11h15'
          },
          {
            name: 'Body Balance',
            start: '11h15',
            timeGroup: 'Matin',
            duration: 45,
            category: 'zen',
            coach: 'Chrystel',
            time: '11h15-12h00'
          }
        ]
      },
      {
        name: 'Dimanche',
        classes: [
          {
            name: 'Body Balance',
            start: '9h00',
            duration: 30,
            category: 'cardio',
            coach: 'Chrystel',
            time: '9h00-9h30'
          },
          {
            name: 'Body Pump',
            start: '9h45',
            duration: 45,
            category: 'renforcement',
            coach: 'Chrystel',
            time: '9h45-10h30'
          }
        ]
      }
    ];

    $scope.coaches = [];
    $scope.categories = [];
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

    $scope.$watch('search', function() {
      for (var key in $scope.search) {
        if (!$scope.search[key]) {
          delete $scope.search[key];
        }
      }
    }, true);
	}
]);
