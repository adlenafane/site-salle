'use strict';

angular.module('salle').directive('roomRow', [ '$window',
  function($window) {
    return {
      restrict: 'EA',
      transclude: true,
      scope: {
        id: '@'
      },
      template: '<div ng-transclude="" ng-click="toggle();"></div>',
      link: function($scope) {
        var $ = $window.$;
        $scope.toggle = function() {
          angular.element( 'html, body' ).animate( {
            scrollTop: $('#' + $scope.id).offset().top
          }, 1000 );
        };
      }
    };
  }
]);
