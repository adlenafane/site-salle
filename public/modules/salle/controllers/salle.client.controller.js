'use strict';

angular.module('salle').controller('SalleController', ['$scope',
	function($scope) {
    $scope.carouselInterval = 5000;

    $scope.slides = [
      { image: '/modules/salle/img/cardio-header.jpg' },
      // { image: '/modules/salle/img/1.jpg' },
      // { image: '/modules/salle/img/2.jpg' },
      { image: '/modules/salle/img/guide-header.jpg' },
      { image: '/modules/salle/img/9.jpg' },
      { image: '/modules/salle/img/3.jpg' },
      { image: '/modules/salle/img/classes-header.jpg' },
      { image: '/modules/salle/img/11.jpg' },
      { image: '/modules/salle/img/12.jpg' },
      { image: '/modules/salle/img/libre-header.jpg' },
      { image: '/modules/salle/img/6.jpg' },
      { image: '/modules/salle/img/7.jpg' },
      { image: '/modules/salle/img/8.jpg' },
      { image: '/modules/salle/img/freedom.jpg' }
    ];
	}
]);
