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
            maxCount: 1
          },
          {
            label: '9h30',
            maxCount: 2
          },
          {
            label: '10h30',
            maxCount: 1
          },
          {
            label: '11h30',
            maxCount: 1
          },
          {
            label: 'Après-midi',
            separator: true,
            maxCount: 1
          },
          {
            label: '14h30',
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
            duration: 60
          },
          {
            name: 'Body step',
            start: '10h30',
            duration: 45
          }
        ]
      },
      {
        name: 'Mardi',
        classes: [
          {
            name: 'Body Attack',
            start: '9h30',
            duration: 90
          },
          {
            name: 'Body Pump',
            start: '14h30',
            duration: 45
          }
        ]
      },
      {
        name: 'Mercredi',
        classes: [
          {
            name: 'Body Attack',
            start: '9h30',
            duration: 90
          },
          {
            name: 'Body Pump',
            start: '14h30',
            duration: 45
          }
        ]
      },
      {
        name: 'Jeudi',
        classes: [
          {
            name: 'Body Attack',
            start: '9h30',
            duration: 90
          },
          {
            name: 'Body Pump',
            start: '9h30',
            duration: 45
          }
        ]
      },
      {
        name: 'Vendredi',
        classes: [
          {
            name: 'Body Attack',
            start: '9h30',
            duration: 90
          },
          {
            name: 'Body Pump',
            start: '14h30',
            duration: 45
          }
        ]
      },
      {
        name: 'Samedi',
        classes: [
          {
            name: 'Body Attack',
            start: '9h30',
            duration: 90
          },
          {
            name: 'Body Pump',
            start: '14h30',
            duration: 45
          }
        ]
      },
      {
        name: 'Dimanche',
        classes: [
          {
            name: 'Body Attack',
            start: '9h30',
            duration: 90
          },
          {
            name: 'Body Pump',
            start: '11h30',
            duration: 45
          }
        ]
      }
    ];
	}
]);
