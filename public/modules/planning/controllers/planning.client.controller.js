'use strict';

angular.module('planning').controller('PlanningController', [
  '$scope', '$state',
	function ($scope, $state) {
    $scope.search = {};

    if ($state.params.name) {
      $scope.search.name = $state.params.name;
    }

		$scope.planning = [
      {
        name: '',
        slots: [
          {
            label: 'Matin',
            separator: true,
            category: 'Matin',
            maxCount: 3
          },
          {
            label: 'Midi',
            separator: true,
            category: 'Midi',
            maxCount: 2
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
            name: 'Cross fit',
            start: '10h',
            timeGroup: 'Matin',
            duration: 45,
            category: 'cardio',
            coach: 'Samuel',
            time: '10h00- 10h45'
          },
          {
            name: 'C.A.F.',
            start: '10h45',
            timeGroup: 'Matin',
            duration: 45,
            category: 'renforcement',
            coach: 'Samuel',
            time: '10h45-11h30'
          },
          {
            name: 'Fessiers Flash',
            start: '12h15',
            timeGroup: 'Midi',
            duration: 15,
            category: 'renforcement',
            coach: 'Samuel',
            time: '12h15-12h30'
          },
          {
            name: 'Biking',
            start: '12h30',
            timeGroup: 'Midi',
            duration: 45,
            category: 'cardio',
            coach: 'Samuel',
            time: '12h30-13h15'
          },
          {
            name: 'Boot Camp',
            start: '18h00',
            timeGroup: 'Soir',
            duration: 30,
            category: 'cardio',
            coach: 'Cédric',
            time: '18h00-18h30'
          },
          {
            name: 'Abdos Fessiers',
            start: '18h30',
            timeGroup: 'Soir',
            duration: 30,
            category: 'renforcement',
            coach: 'Cédric',
            time: '18h30-19h00'
          },
          {
            name: 'Step',
            start: '19h00',
            timeGroup: 'Soir',
            duration: 45,
            category: 'danse',
            coach: 'Cédric',
            time: '19h00-19h45'
          },
          {
            name: 'Stretching',
            start: '19h45',
            timeGroup: 'Soir',
            duration: 15,
            category: 'zen',
            coach: 'Cédric',
            time: '19h45-20h00'
          },
          {
            name: 'Zumba',
            start: '20h00',
            timeGroup: 'Soir',
            duration: 45,
            category: 'zen',
            coach: 'Cédric',
            time: '20h00-20h45'
          }
        ]
      },
      {
        name: 'Mardi',
        classes: [
          {
            name: 'Gym douce',
            start: '9h30',
            timeGroup: 'Matin',
            duration: 45,
            category: 'zen',
            coach: 'Christian',
            time: '9h30-10h15'
          },
          {
            name: 'Body Barre',
            start: '10h15',
            timeGroup: 'Matin',
            duration: 45,
            category: 'renforcement',
            coach: 'Christian',
            time: '10h15-11h00'
          },
          {
            name: 'Biking',
            start: '12h15',
            timeGroup: 'Midi',
            duration: 45,
            category: 'cardio',
            coach: 'Christian',
            time: '12h15-13h00'
          },
          {
            name: 'Abdos Flash',
            start: '13h00',
            timeGroup: 'Midi',
            duration: 15,
            category: 'renforcement',
            coach: 'Christian',
            time: '13h00-13h15'
          },
          {
            name: 'H.I.I.T.',
            start: '18h00',
            timeGroup: 'Soir',
            duration: 30,
            category: 'cardio',
            coach: 'Christian',
            time: '18h00-18h30'
          },
          {
            name: 'Biking',
            start: '18h30',
            timeGroup: 'Soir',
            duration: 60,
            category: 'cardio',
            coach: 'Christian',
            time: '18h30-19h30'
          },
          {
            name: 'Abdos Fessiers',
            start: '19h30',
            timeGroup: 'Soir',
            duration: 30,
            category: 'renforcement',
            coach: 'Christian',
            time: '19h30-20h00'
          }
        ]
      },
      {
        name: 'Mercredi',
        classes: [
          {
            name: 'Postural Shape',
            start: '9h30',
            timeGroup: 'Matin',
            duration: 45,
            category: 'zen',
            coach: '',
            time: '9h30-10h15'
          },
          {
            name: 'Abdos Flash',
            start: '10h15',
            timeGroup: 'Matin',
            duration: 15,
            category: 'renforcement',
            coach: '',
            time: '10h15-10h30'
          },
          {
            name: 'H.I.I.T.',
            start: '10h30',
            timeGroup: 'Matin',
            duration: 30,
            category: 'cardio',
            coach: '',
            time: '10h30-11h00'
          },
          {
            name: 'Pilates',
            start: '12h15',
            timeGroup: 'Midi',
            duration: 45,
            category: 'zen',
            coach: 'Adrien',
            time: '12h15-13h00'
          },
          {
            name: 'Zumba',
            start: '13h00',
            timeGroup: 'Midi',
            duration: 45,
            category: 'danse',
            coach: 'Adrien',
            time: '13h00-13h45'
          },
          {
            name: 'Postural Shape',
            start: '17h45',
            timeGroup: 'Soir',
            duration: 45,
            category: 'zen',
            coach: 'Christian',
            time: '17h45-18h30'
          },
          {
            name: 'Biking',
            start: '18h30',
            timeGroup: 'Soir',
            duration: 45,
            category: 'cardio',
            coach: 'Christian',
            time: '18h30-19h15'
          },
          {
            name: 'Body Sculpt',
            start: '19h15',
            timeGroup: 'Soir',
            duration: 45,
            category: 'renforcement',
            coach: 'Christian',
            time: '19h15-20h00'
          },
          {
            name: 'Zumba',
            start: '20h00',
            timeGroup: 'Soir',
            duration: 45,
            category: 'renforcement',
            coach: 'Christian',
            time: '20h00-20h45'
          }
        ]
      },
      {
        name: 'Jeudi',
        classes: [
          {
            name: 'Piloxing',
            start: '9h30',
            timeGroup: 'Matin',
            duration: 45,
            category: 'cardio',
            coach: 'Sylvie',
            time: '9h30-10h15'
          },
          {
            name: 'Abdos Flash',
            start: '10h15',
            timeGroup: 'Matin',
            duration: 15,
            category: 'renforcement',
            coach: 'Sylvie',
            time: '10h15-10h30'
          },
          {
            name: 'Zumba',
            start: '12h30',
            timeGroup: 'Midi',
            duration: 45,
            category: 'danse',
            coach: 'Sylvie',
            time: '12h30-13h15'
          },
          {
            name: 'Abdos Flash',
            start: '13h15',
            timeGroup: 'Midi',
            duration: 15,
            category: 'renforcement',
            coach: 'Sylvie',
            time: '13h15-13h30'
          },
          {
            name: 'Body Sculpt',
            start: '18h00',
            timeGroup: 'Soir',
            duration: 45,
            category: 'renforcement',
            coach: 'Sofiane',
            time: '18h00-18h45'
          },
          {
            name: 'Latinva',
            start: '18h45',
            timeGroup: 'Soir',
            duration: 60,
            category: 'danse',
            coach: 'Sofiane',
            time: '18h45-19h45'
          },
          {
            name: 'Stretching',
            start: '19h45',
            timeGroup: 'Soir',
            duration: 30,
            category: 'zen',
            coach: 'Sofiane',
            time: '19h45-20h15'
          }
        ]
      },
      {
        name: 'Vendredi',
        classes: [
          {
            name: 'Biking',
            start: '9h30',
            timeGroup: 'Matin',
            duration: 45,
            category: 'cardio',
            coach: 'Cédric',
            time: '9h30-10h15'
          },
          {
            name: 'Body and Mind',
            start: '10h15',
            timeGroup: 'Matin',
            duration: 45,
            category: 'renforcement',
            coach: 'Cédric',
            time: '10h15-11h00'
          },
          {
            name: 'Zumba',
            start: '12h15',
            timeGroup: 'Midi',
            duration: 45,
            category: 'danse',
            coach: 'Adrien',
            time: '12h15-13h00'
          },
          {
            name: 'Special Taille',
            start: '13h00',
            timeGroup: 'Midi',
            duration: 30,
            category: 'zen',
            coach: 'Adrien',
            time: '13h00-13h30'
          },
          {
            name: 'Stretching',
            start: '13h30',
            timeGroup: 'Midi',
            duration: 15,
            category: 'zen',
            coach: 'Adrien',
            time: '13h30-13h45'
          },
          {
            name: 'Piloxing',
            start: '17h30',
            timeGroup: 'Soir',
            duration: 60,
            category: 'cardio',
            coach: 'Sylvie & Miguel',
            time: '17h30-18h30'
          },
          {
            name: 'Salsa',
            start: '18h30',
            timeGroup: 'Soir',
            duration: 60,
            category: 'danse',
            coach: 'Sylvie & Miguel',
            time: '18h30-19h30'
          },
          {
            name: 'Bachata',
            start: '19h30',
            timeGroup: 'Soir',
            duration: 60,
            category: 'danse',
            coach: 'Sylvie & Miguel',
            time: '19h30-20h30'
          }
        ]
      },
      {
        name: 'Samedi',
        classes: [
          {
            name: 'Step',
            start: '10h30',
            timeGroup: 'Matin',
            duration: 45,
            category: 'cardio',
            coach: 'Julien',
            time: '10h30-11h15'
          },
          {
            name: 'Body Sculpt',
            start: '11h15',
            timeGroup: 'Matin',
            duration: 45,
            category: 'renforcement',
            coach: 'Julien',
            time: '11h15-12h00'
          },
          {
            name: 'Abdos Fessiers',
            start: '12h00',
            timeGroup: 'Midi',
            duration: 30,
            category: 'renforcement',
            coach: 'Julien',
            time: '12h00-12h30'
          }
        ]
      },
      {
        name: 'Dimanche',
        classes: [
          {
            name: 'C.A.F.',
            start: '10h30',
            timeGroup: 'Matin',
            duration: 45,
            category: 'renforcement',
            coach: 'Cloé',
            time: '10h30-11h15'
          },
          {
            name: 'Djembel',
            start: '11h15',
            timeGroup: 'Matin',
            duration: 60,
            category: 'danse',
            coach: 'Cloé',
            time: '11h15-12h15'
          },
          {
            name: 'Stretching',
            start: '12h15',
            timeGroup: 'Midi',
            duration: 15,
            category: 'zen',
            coach: 'Cloé',
            time: '12h15-12h30'
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
