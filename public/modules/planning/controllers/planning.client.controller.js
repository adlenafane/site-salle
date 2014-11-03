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
            label: '10h00',
            category: 'Matin',
            maxCount: 1
          },
          {
            label: '10h30',
            category: 'Matin',
            maxCount: 1
          },
          {
            label: '11h15',
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
            label: '13h00',
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
            label: '14h00',
            category: 'Après-midi',
            maxCount: 1
          },
          {
            label: '15h00',
            category: 'Après-midi',
            maxCount: 1
          },
          {
            label: '16h00',
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
            label: '17h45',
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
            coach: 'Nolwen',
            time: '9h30- 10h30'
          },
          {
            name: 'Body step',
            start: '10h30',
            duration: 45,
            category: 'cardio',
            coach: 'Nolwen',
            time: '10h30-11h15'
          },
          {
            name: 'Body Pump',
            start: '12h15',
            duration: 45,
            category: 'renforcement',
            coach: 'Julie',
            time: '12h15-13h00'
          },
          {
            name: 'Body Step',
            start: '13h00',
            duration: 30,
            category: 'cardio',
            coach: 'Nolwen',
            time: '13h00-13h30'
          },
          {
            name: 'Body Pump',
            start: '17h30',
            duration: 45,
            category: 'renforcement',
            coach: 'Chrystel',
            time: '17h30-18h15'
          },
          {
            name: 'Zumba',
            start: '18h15',
            duration: 45,
            category: 'danse',
            coach: 'Chrystel',
            time: '18h15-19h00'
          },
          {
            name: 'Body Attack',
            start: '19h00',
            duration: 60,
            category: 'cardio',
            coach: 'Chrystel',
            time: '19h00-20h00'
          },
          {
            name: 'Stretching',
            start: '20h00',
            duration: 30,
            category: 'zen',
            coach: 'Chrystel',
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
          },
          {
            name: 'Body Attack',
            start: '12h15',
            duration: 30,
            category: 'cardio',
            coach: 'Nolwen',
            time: '12h15-12h45'
          },
          {
            name: 'Core',
            start: '12h45',
            duration: 30,
            category: 'renforcement',
            coach: 'Nolwen',
            time: '12h45-13h15'
          },
          {
            name: 'Body Vive',
            start: '17h45',
            duration: 30,
            category: 'cardio',
            coach: 'Nolwen',
            time: '17h45-18h15'
          },
          {
            name: 'Body Combat',
            start: '18h15',
            duration: 45,
            category: 'renforcement',
            coach: 'Julie',
            time: '18h15-19h00'
          },
          {
            name: 'Body Pump',
            start: '19h00',
            duration: 60,
            category: 'renforcement',
            coach: 'Julie',
            time: '19h00-20h00'
          },
          {
            name: 'Body Step',
            start: '20h00',
            duration: 60,
            category: 'cardio',
            coach: 'Julie',
            time: '20h00-21h00'
          }
        ]
      },
      {
        name: 'Mercredi',
        classes: [
          {
            name: 'Pilates',
            start: '9h00',
            duration: 45,
            category: 'zen',
            coach: 'Nolwen',
            time: '9h00-9h45'
          },
          {
            name: 'Body Pump',
            start: '12h15',
            duration: 30,
            category: 'renforcement',
            coach: 'Julie',
            time: '12h15-12h45'
          },
          {
            name: 'Body Vive',
            start: '12h45',
            duration: 45,
            category: 'cardio',
            coach: 'Julie',
            time: '12h45-13h30'
          },
          {
            name: 'Core',
            start: '17h45',
            duration: 30,
            category: 'renforcement',
            coach: 'Julie',
            time: '17h45-18h15'
          },
          {
            name: 'Body Pump',
            start: '18h15',
            duration: 45,
            category: 'renforcement',
            coach: 'Julie',
            time: '18h15-19h00'
          },
          {
            name: 'Body Djam',
            start: '19h00',
            duration: 60,
            category: 'danse',
            coach: 'Chrystel',
            time: '19h00-20h00'
          },
          {
            name: 'Body Balance',
            start: '20h00',
            duration: 60,
            category: 'zen',
            coach: 'Chrystel',
            time: '20h00-21h00'
          }
        ]
      },
      {
        name: 'Jeudi',
        classes: [
          {
            name: 'Body Vive',
            start: '9h30',
            duration: 30,
            category: 'cardio',
            coach: 'Chrystel',
            time: '9h30-10h00'
          },
          {
            name: 'Stretching',
            start: '10h00',
            duration: 30,
            category: 'zen',
            coach: 'Chrystel',
            time: '10h00-10h30'
          },
          {
            name: 'Body Combat',
            start: '12h15',
            duration: 30,
            category: 'renforcement',
            coach: 'Nolwen',
            time: '12h15-12h45'
          },
          {
            name: 'Body Pump',
            start: '13h00',
            duration: 30,
            category: 'renforcement',
            coach: 'Nolwen',
            time: '13h00-13h00'
          },
          {
            name: 'Body Vive',
            start: '17h45',
            duration: 30,
            category: 'cardio',
            coach: 'Nolwen',
            time: '17h45-18h15'
          },
          {
            name: 'Body Attack',
            start: '18h15',
            duration: 45,
            category: 'cardio',
            coach: 'Julie',
            time: '18h15-19h00'
          },
          {
            name: 'Body Combat',
            start: '19h00',
            duration: 60,
            category: 'renforcement',
            coach: 'Julie',
            time: '19h00-20h00'
          },
          {
            name: 'Body Pump',
            start: '20h00',
            duration: 60,
            category: 'renforcement',
            coach: 'Julie',
            time: '20h00-21h00'
          }
        ]
      },
      {
        name: 'Vendredi',
        classes: [
          {
            name: 'Body Pump',
            start: '9h00',
            duration: 45,
            category: 'renforcement',
            coach: 'Chrystel',
            time: '9h00-9h45'
          },
          {
            name: 'Body Blance',
            start: '10h00',
            duration: 30,
            category: 'zen',
            coach: 'Chrystel',
            time: '10h00-10h30'
          },
          {
            name: 'Body Step',
            start: '12h15',
            duration: 30,
            category: 'cardio',
            coach: 'Nolwen',
            time: '12h15-12h45'
          },
          {
            name: 'Core',
            start: '12h45',
            duration: 30,
            category: 'renforcement',
            coach: 'Chrystel',
            time: '12h45-13h15'
          },
          {
            name: 'Core',
            start: '17h45',
            duration: 30,
            category: 'renforcement',
            coach: 'Nolwen',
            time: '17h45-18h15'
          },
          {
            name: 'Body Step',
            start: '18h15',
            duration: 45,
            category: 'cardio',
            coach: 'Nolwen',
            time: '18h15-19h00'
          },
          {
            name: 'Body Pump',
            start: '19h00',
            duration: 60,
            category: 'renforcement',
            coach: 'Nolwen',
            time: '19h00-20h00'
          },
          {
            name: 'Sh\'Bam',
            start: '20h00',
            duration: 60,
            category: 'cardio',
            coach: 'Nolwen',
            time: '20h00-21h00'
          }
        ]
      },
      {
        name: 'Samedi',
        classes: [
          {
            name: 'Body Attack',
            start: '10h30',
            duration: 45,
            category: 'cardio',
            coach: 'Julie',
            time: '10h30-11h15'
          },
          {
            name: 'Body Balance',
            start: '11h15',
            duration: 45,
            category: 'zen',
            coach: 'Chrystel',
            time: '11h15-12h00'
          },
          {
            name: 'Body Djam',
            start: '14h00',
            duration: 60,
            category: 'danse',
            coach: 'Nolwen',
            time: '14h00-15h00'
          },
          {
            name: 'Body Pump',
            start: '15h00',
            duration: 60,
            category: 'renforcement',
            coach: 'Julie',
            time: '15h00-16h00'
          },
          {
            name: 'Body Combat',
            start: '16h00',
            duration: 60,
            category: 'renforcement',
            coach: 'Julie',
            time: '16h00-17h00'
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

    //for(var i = 1; i < $scope.planning.length; i++) {
    //  for(var j = 0; j < $scope.planning[i].classes.length; j++) {
    //    var momentDate = moment($scope.planning[i].classes[j].start, 'H[h]m');
    //    $scope.planning[i].classes[j].indexLeft = i - 1;
    //    $scope.planning[i].classes[j].indexTop = (4 * momentDate.hour() + momentDate.minute() / 15) - 36;
    //    $scope.planning[i].classes[j].positionStyle = {
    //      'left': 100 * $scope.planning[i].classes[j].indexLeft + 'px',
    //      'top': 25 * $scope.planning[i].classes[j].indexTop +'px'
    //    };
    //  }
    //}
	}
]);
