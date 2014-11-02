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
            maxCount: 1
          },
          {
            label: '9h30',
            category: 'Matin',
            maxCount: 2
          },
          {
            label: '10h30',
            category: 'Matin',
            maxCount: 1
          },
          {
            label: '11h30',
            category: 'Matin',
            maxCount: 1
          },
          {
            label: 'Midi',
            separator: true,
            category: 'Midi',
            maxCount: 1
          },
          {
            label: '12h15',
            category: 'Midi',
            maxCount: 1
          },
          {
            label: 'Après-midi',
            separator: true,
            category: 'Après-midi',
            maxCount: 1
          },
          {
            label: '14h30',
            category: 'Après-midi',
            maxCount: 1
          },
          {
            label: 'Soir',
            separator: true,
            category: 'Soir',
            maxCount: 1
          },
          {
            label: '17h30',
            category: 'Soir',
            maxCount: 1
          },
          {
            label: '18h15',
            category: 'Soir',
            maxCount: 1
          },
          {
            label: '19h00',
            category: 'Soir',
            maxCount: 1
          },
          {
            label: '20h00',
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
