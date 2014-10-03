'use strict';

angular.module('salle').controller('SalleController', ['$scope',
	function($scope) {
    $scope.carouselInterval = 5000;

    $scope.slides = [
      { image: '/modules/salle/img/cardio.jpg' },
      { image: '/modules/salle/img/libre.jpg' },
      { image: '/modules/salle/img/guide.jpg' },
      { image: '/modules/salle/img/classes.jpg' },
      { image: '/modules/salle/img/classes-2.jpg' },
      { image: '/modules/salle/img/classes-3.jpg' },
      { image: '/modules/salle/img/classes-4.jpg' },
      { image: '/modules/salle/img/classes-5.jpg' },
      { image: '/modules/salle/img/biking.jpg' },
      { image: '/modules/salle/img/freedom.jpg' },
      { image: '/modules/salle/img/trx.jpg' },
      { image: '/modules/salle/img/rest.jpg' }
    ];
	}
]);

/** Fix animation for UI Bootstrap Carousel **/
angular.module('salle').directive('disableAnimation', ['$animate',
  function($animate){
    return {
      restrict: 'A',
      link: function($scope, $element, $attrs){
        $attrs.$observe('disableAnimation', function(value){
          $animate.enabled(!value, $element);
        });
      }
    }
  }
]);
