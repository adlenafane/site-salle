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
    };
  }
]);