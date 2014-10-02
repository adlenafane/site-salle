'use strict';

angular.module('salle').controller('SalleController', ['$scope',
	function($scope) {
    $scope.carouselInterval = 5000;

    $scope.slidesCardio = [
      {
        image: '/modules/salle/img/cardio.jpg'
      }
    ];

    $scope.slidesLibre = [
      {
        image: '/modules/salle/img/libre.jpg'
      }
    ];

    $scope.slidesGuide = [
      {
        image: '/modules/salle/img/guide.jpg'
      }
    ];

    $scope.slidesClasses = [
      { image: '/modules/salle/img/classes.jpg' },
      { image: '/modules/salle/img/classes-2.jpg' },
      { image: '/modules/salle/img/classes-3.jpg' },
      { image: '/modules/salle/img/classes-4.jpg' },
      { image: '/modules/salle/img/classes-5.jpg' }
    ];

    $scope.slidesBiking = [
      {
        image: '/modules/salle/img/biking.jpg'
      }
    ];

    $scope.slidesFreedom = [
      {
        image: '/modules/salle/img/freedom.jpg'
      }
    ];

    $scope.slidesTrx = [
      {
        image: '/modules/salle/img/trx.jpg'
      }
    ];

    $scope.slidesRest = [
      {
        image: '/modules/salle/img/rest.jpg'
      }
    ];
	}
]);