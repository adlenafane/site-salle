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
            label: '9h00',
            category: 'Matin',
            maxCount: 1
          },
          {
            label: '9h30',
            category: 'Matin',
            maxCount: 2
          },
          {
            label: '9h45',
            category: 'Matin',
            maxCount: 1
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
            label: '12h45',
            category: 'Midi',
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
            duration: 60,
            category: 'danse',
            time: '9h30- 10h30'
          },
          {
            name: 'Body step',
            start: '10h30',
            duration: 45,
            category: 'cardio',
            time: '10h30-11h15'
          },
          {
            name: 'Body Pump',
            start: '17h30',
            duration: 45,
            category: 'renforcement',
            time: '17h30-18h15'
          },
          {
            name: 'Zumba',
            start: '18h15',
            duration: 45,
            category: 'danse',
            time: '18h15-19h00'
          },
          {
            name: 'Body Attack',
            start: '19h00',
            duration: 60,
            category: 'cardio',
            time: '19h00-20h00'
          },
          {
            name: 'Stretching',
            start: '20h00',
            duration: 30,
            category: 'zen',
            time: '20h00-20h30'
          }
        ]
      },
      {
        name: 'Mardi',
        classes: [
          {
            name: 'Body Balance',
            start: '9h00',
            duration: 30,
            category: 'cardio',
            time: '9h00-9h30'
          },
          {
            name: 'Body Pump',
            start: '9h45',
            duration: 45,
            category: 'renforcement',
            time: '9h45-10h30'
          },
          {
            name: 'Body Attack',
            start: '12h15',
            duration: 30,
            category: 'cardio',
            time: '12h15-12h45'
          },
          {
            name: 'Core',
            start: '12h45',
            duration: 30,
            category: 'renforcement',
            time: '12h45-13h15'
          }
        ]
      },
      {
        name: 'Mercredi',
        classes: [
          {
            name: 'Body Attack',
            start: '9h30',
            category: 'danse',
            duration: 90
          }
        ]
      },
      {
        name: 'Jeudi',
        classes: [
          {
            name: 'Body Attack',
            start: '9h30',
            category: 'danse',
            duration: 90
          }
        ]
      },
      {
        name: 'Vendredi',
        classes: [
          {
            name: 'Body Attack',
            start: '9h30',
            category: 'danse',
            duration: 90
          }
        ]
      },
      {
        name: 'Samedi',
        classes: [
          {
            name: 'Body Attack',
            start: '9h30',
            category: 'danse',
            duration: 90
          },
          {
            name: 'Body Pump',
            start: '14h30',
            category: 'danse',
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
            category: 'danse',
            duration: 90
          },
          {
            name: 'Body Pump',
            start: '11h30',
            category: 'danse',
            duration: 45
          }
        ]
      }
    ];
	}
]);
